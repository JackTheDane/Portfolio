import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Head from 'next/head';
import styles from './styles.module.scss';
import { IProject } from 'models/interfaces/IProject';
import { GetStaticProps } from 'next';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { GitHubIcon } from 'icons/Github';
import { BrandColors } from 'data/BrandColors';
import { PageHeader } from 'components/domains/content/PageHeader';
import { ProjectCard, ProjectCardClasses } from 'components/domains/portfolio/ProjectCard';

export interface ProjectsProps {
  projects: IProject[];
}

const projectClasses: ProjectCardClasses = {
  root: styles.projectCard,
  imageWrapper: styles.imageWrapper,
  cardHeader: styles.cardHeader
};

const Projects = ({
  projects
}: ProjectsProps) => {

  return (
    <>

      <PageHeader pageTitle="Portfolio">
        <div className="text-right ml-a pl-2 d-flex text-light mt-a" style={{ alignItems: 'flex-end' }}>
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
      </PageHeader>
      <div className="mb-2 hide-lg" style={{ padding: '0 20px' }}>
        <div className="divider-dark" />
      </div>

      <main className={`${styles.projects}`}>
        <div className="content">
          <div className={`${styles.pageContent}`}>
            <div className="col-12">

              <div className={`${styles.projectsWrapper} columns`}>

                {
                  projects.map(
                    (project, i: number): JSX.Element => {
                      return (
                        <div key={project.slug} className={`column col-6 col-sm-12 ${styles.column}`}>
                          <ProjectCard project={project} classes={projectClasses} />
                        </div>
                      )
                    }
                  )
                }

              </div>
            </div>

          </div>
        </div>
      </main>
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
