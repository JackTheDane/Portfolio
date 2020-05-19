import fs from 'fs';
import matter from 'gray-matter';
import styles from './styles.module.scss';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { GetStaticProps } from 'next';
import { IProject } from 'models/interfaces/IProject';
import path from 'path';
import { NavLink } from 'components/domains/navigation/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { EyeIcon } from 'icons/Eye';
import { BaseCarousel } from 'components/reusables/carousels/BaseCarousel';
import { DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';
import { MapMarkerIcon } from 'icons/MapMarker';
import { CodeIcon } from 'icons/Code';

interface FrontPageProps {
  projects: IProject[];
}

const FrontPage = ({
  projects
}: FrontPageProps) => {

  const portfolioPreviews: JSX.Element[] = projects.map(
    ({
      slug,
      images,
      title,
      role
    }): JSX.Element => (
        <div key={slug} className={`${styles.projectColumn}`}>
          <NavLink
            className={`card`}
            href={`/${SiteRoutes.portfolio}/[slug]`}
            as={`/${SiteRoutes.portfolio}/${slug}`}
          >
            <div className={styles.imageWrapper}>
              <ProgressiveImageLoader staticImageSize={DynamicLocalImageSizes.small} src={images[0]} imageHeight="260px" />
            </div>
          </NavLink>
        </div>
      )
  );

  portfolioPreviews.push(
    <NavLink
      href={`/${SiteRoutes.portfolio}`}
      className={`${styles.projectColumn} ${styles.viewMoreSlide} d-flex text-center text-light card bg-primary`}
    >
      <EyeIcon />
      <div className="my-3">
        Click for more projects
      </div>
    </NavLink>
  )


  return (
    <div className={`${styles.about} content-page d-flex`}>
      <div className={`${styles.profile} content`}>


        <div className="text-light d-flex mb-3 align-center flex-col" >
          <h1 className="mb-3 d-inline-flex bg-primary px-3 py-2 card">
            Hi, I'm Martin!
          </h1>
          <div className="d-flex" style={{ fontSize: '.85rem' }}>
            <span className="py-1 text-light d-flex align-center">
              <CodeIcon className="mr-2 d-flex" />
              Frontend Developer
            </span>

            <span className="py-1 text-light d-flex ml-5 align-center">
              <MapMarkerIcon className="mr-2 d-flex" />
              Gentofte, Denmark
            </span>
          </div>
        </div>

        <div className={`${styles.secondaryText} text-light mb-5 pb-5 pt-4`}>
          <p>
            I build <b>Fast & User-friendly experiences</b> <span className="hide-md">with a focus <b>UX, maintainability and performance</b></span>
          </p>
          <p className="hide-lg">
            I have background as a Multimedia Designer and a Fullstack Web Developer and have been a part of the web development world since 2015.
          </p>
        </div>
      </div>

      <div className={`${styles.content} pb-5 my-a`}>

        <div className={`${styles.workSection} content mb-4`}>
          <div className="d-flex justify-center align-end justify-space-between">
            <h4 className="text-light pr-1 pb-2" style={{ marginBottom: 0 }}>
              My work
            </h4>
            <NavLink className={`ml-a btn btn-link text-light ${styles.viewMoreButton}`} href={`/${SiteRoutes.portfolio}`}>
              <EyeIcon className="mr-3 text-light" />
              View all work
            </NavLink>
          </div>
        </div>


        <div className={`${styles.projectCarousel} content`}>
          <BaseCarousel
            slidesPerView="auto"
            spaceBetween={15}
            children={portfolioPreviews}
            centerInsufficientSlides={true}
            classNames={{
              nextNavButton: styles.nextSlideButton
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<FrontPageProps> = async () => {
  const projectsFolder: string = 'data/posts/projects';
  // Get the content of the md file by checking for it using the file name + the .md extension
  const postFileNames: string[] = fs.readdirSync(projectsFolder).slice(0, 3); // Get only the first 3 as a preview

  const projects: IProject[] = await Promise.all(postFileNames.map(
    (fn): Promise<IProject> => new Promise((res, rej) => {


      try {
        fs.readFile(path.join(projectsFolder, fn), async (err, data) => {

          if (err) {
            rej(err);
            return;
          }

          try {
            const { data: { title, role, url, skills, images } } = matter(data.toString());

            res({
              title,
              slug: fn.replace('.md', ''),
              url,
              images: images.slice(0, 1),
              role,
              skills
            });
          } catch (error) {
            console.log(error);
            rej(error);
          }

        });

      } catch (error) {
        console.log(error);
        rej(error);
      }
    })
  ))

  return {
    props: {
      projects
    }
  }
}

export default FrontPage

