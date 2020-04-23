import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { IProject } from '../../models/interfaces/IProject';
import { GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Head from 'next/head';
import { ProgressiveImageLoader } from '../../components/reusables/ProgressiveImageLoader';
import { SiteRoutes } from '../../data/routes/SiteRoutes';
import { NavLink } from '../../components/domains/navigation/NavLink';

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

      <div className={`content-page ${styles.projects}`}>

        <div className="content">
          <h1 className={`text-light ${styles.title}`}>
            Portfolio
          </h1>
        </div>

        <div className={`${styles.pageContent} content`}>
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
                        <ProgressiveImageLoader src={images[0]} imageHeight="50%" />
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
