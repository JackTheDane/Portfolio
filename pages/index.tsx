import styles from './styles.module.scss';
import Link from 'next/link';
import { ProgressiveImageLoader } from '../components/reusables/ProgressiveImageLoader';
import { GetStaticProps } from 'next';
import { IProject } from '../models/interfaces/IProject';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { NavLink } from '../components/domains/navigation/NavLink';
import { SiteRoutes } from '../data/routes/SiteRoutes';
import { EyeIcon } from '../components/domains/icons/Eye';

interface FrontPageProps {
  projects: IProject[];
}

const FrontPage = ({
  projects
}: FrontPageProps) => {
  return (
    <div className={`content-page content ${styles.about}`}>
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

        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
          <h2 className="text-light" style={{ marginBottom: 0 }}>
            My projects
          </h2>
          <NavLink className="btn btn-primary btn-lg" href={`/${SiteRoutes.portfolio}`}>
            View my work
            <EyeIcon className="ml-3" />
          </NavLink>
        </div>

        <div className="divider my-5" />

        <div className="d-flex columns">
          {projects.map(
            ({
              slug,
              images,
              title,
              role
            }): JSX.Element => (
                <div key={slug} className={`${styles.column} column`} style={{ width: 250, flexGrow: 1 }}>
                  <NavLink
                    className={`card ${styles.projectCard}`}
                    href={`/${SiteRoutes.portfolio}/[slug]`}
                    as={`/${SiteRoutes.portfolio}/${slug}`}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className={styles.imageWrapper}>
                      <ProgressiveImageLoader src={images[0]} imageHeight="250px" />
                    </div>

                    <div className={`card-header ${styles.cardHeader}`}>
                      <div className="card-title h4 text-primary"> {title} <div className={`text-gray fw-medium ${styles.cardRoles}`}>{role}</div> </div>
                    </div>
                  </NavLink>
                </div>
              )
          )}
        </div>

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<FrontPageProps> = async () => {
  const projectsFolder: string = 'data/posts/projects';
  // Get the content of the md file by checking for it using the file name + the .md extension
  const postFileNames: string[] = fs.readdirSync(projectsFolder);

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

