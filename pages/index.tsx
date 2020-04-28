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
            className={`card ${styles.projectCard}`}
            href={`/${SiteRoutes.portfolio}/[slug]`}
            as={`/${SiteRoutes.portfolio}/${slug}`}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.imageWrapper}>
              <ProgressiveImageLoader src={images[0]} imageHeight="260px" />
            </div>

            {/* <div className={`card-header ${styles.cardHeader}`}>
              <div className="card-title h4 text-primary"> {title} <div className={`text-gray fw-medium ${styles.cardRoles}`}>{role}</div> </div>
            </div> */}
          </NavLink>
        </div>
      )
  );

  // portfolioPreviews.push(
  //   <div className={`${styles.projectColumn} card bg-primary`}>

  //   </div>
  // )


  return (
    <div className={`content-page ${styles.about}`}>
      <div className={styles.profile}>

        <div className="transition-elem delay-0">
          <div className={styles.profileImageWrapper}>
            <ProgressiveImageLoader imageHeight="100%" className={styles.profileImage} src="profile.jpg" alt="Martin Bøje Petersen" />
          </div>
        </div>

        <div className={`transition-elem delay-0 ${styles.profileTitleText}`}>
          <h1 className="mb-2 text-primary">
            Martin Bøje Petersen
          </h1>
          <h4 className="text-gray fw-medium">
            Webudvikler & IT Konsulent
          </h4>
        </div>
      </div>

      <div className={styles.content}>



        {/* <div className={`transition-elem delay-1 ${styles.subcontent}`}>
          <h4 className={`${styles.subcontentTitle} text-primary`}>
            Front-end udvikler med kompetencer for backend & design
            </h4>
          <p className="mb-0">
            Mit navn er Martin Bøje Petersen, og jeg har siden 2015 været en del af Web-branchen, bl.a. som studerende, deltidsansat og selvstændig. <br />
            <br />
              Jeg ser det som mit job at skabe det bedste produkt for både brugerne og de andre udviklere på mit hold. Derfor stræber jeg altid for at samarbejde med mit team og kunden for at opnå en harmoni mellem at skabe god brugeroplevelse og skrive let-forståelig kode. <br />
            <br />
              Se nogle af mine projekter <Link href="/projects"><a>her</a></Link>.
            </p>
        </div> */}


        <div className="content mb-5">
          <div className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h3 className="text-light" style={{ marginBottom: 0 }}>
              My work
          </h3>
            <NavLink className="btn btn-primary btn-lg" href={`/${SiteRoutes.portfolio}`}>
              View all work
            <EyeIcon className="ml-3" />
            </NavLink>
          </div>
          {/* <div className="divider my-5" /> */}
        </div>


        <div className={`${styles.projectCarousel} content`}>
          <BaseCarousel
            slidesPerView="auto"
            spaceBetween={15}
            children={portfolioPreviews}
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

