import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Head from 'next/head';
import styles from './styles.module.scss';
import { IProject } from 'models/interfaces/IProject';
import { GetStaticProps } from 'next';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { NavLink } from 'components/domains/navigation/NavLink';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { GitHubIcon } from 'icons/Github';
import { BrandColors } from 'data/BrandColors';
import { DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';

export interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({
  projects
}: ProjectsProps) => {

  return (
    <>
      <Head>
        <title>
          Picked Projects - Martin Bøje Petersen
        </title>
      </Head>

      <div className={` ${styles.projects} content`}>

        <div className="mt-5 d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h1 className={`text-light`} style={{ marginBottom: 0 }}>
            Portfolio
          </h1>

          <div className="text-right ml-a pl-2 d-flex" style={{ alignItems: 'flex-end' }}>
            <span className="text-light mr-4 hide-sm" style={{ marginBottom: '-.1em' }}>
              Want to see more?
            </span>
            <a href={OutboundRoutes.gitHub} className="btn btn-primary hide-sm" style={{ backgroundColor: BrandColors.GitHub, border: 'none' }}>
              <GitHubIcon className="mr-2" />
              Visit my GitHub
            </a>

            <a href={OutboundRoutes.gitHub} className="btn btn-lg btn-primary btn-action show-sm" style={{ backgroundColor: BrandColors.GitHub, border: 'none' }}>
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* <div className="divider" /> */}

        <div className={`${styles.pageContent}`}>
          <div className={`${styles.projectsWrapper} columns`}>

            {projects.map(
              ({
                slug,
                images,
                title,
                role
              }): JSX.Element => (
                  <div key={slug} className={`column col-6 col-md-12 ${styles.column}`}>
                    <NavLink
                      className={`card ${styles.projectCard}`}
                      href={`/${SiteRoutes.portfolio}/[slug]`}
                      as={`/${SiteRoutes.portfolio}/${slug}`}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.imageWrapper}>
                        <ProgressiveImageLoader src={images[0]} imageHeight="50%" staticImageSize={DynamicLocalImageSizes.small} />
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
    </>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
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

export default Projects
