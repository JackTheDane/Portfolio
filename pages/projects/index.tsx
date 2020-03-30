import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { IProject } from '../../models/interfaces/IProject';
import { GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { getSkillObjectsFromArray } from '../../utils/getSkillObjectsFromArray';

export interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({
  projects
}: ProjectsProps) => {
  return (
    <div className={`content-page ${styles.projects}`}>

      <h2 className={`transition-elem delay-0 text-primary ${styles['projects__title']}`}>
        Udvalgte Projekter
      </h2>

      <div className="divider transition-elem delay-0"></div>

      <div className={`${styles['projects__columns']} columns`}>

        {projects.map(
          ({
            slug,
            images,
            title,
            role,
            url
          }): JSX.Element => (
              <div key={slug} className={`column col-6 col-md-12 ${styles['projects__column']}`}>
                <div className="card">
                  <div className={styles['projects__image-wrapper']}>
                    <div className={styles['projects__image']} style={{ backgroundImage: `url(${images[0]})` }} />
                  </div>

                  <div className={`card-header ${styles.cardHeader}`}>
                    <div className="card-title h4 text-primary"> {title} <div className={`text-gray fw-medium ${styles.cardRoles}`}>{role}</div> </div>
                  </div>

                  <div className={`card-footer ${styles.cardFooter}`}>
                    <div className="btn-group btn-group-block">
                      <Link href={`/projects/[slug]`} as={'/projects/' + slug}>
                        <a
                          className="btn btn-primary btn-lg"
                        >
                          Vis projekt
                      </a>
                      </Link>

                      {url && <a href={url} target='_blank' rel='noopener' className="btn btn-icon-right btn-lg">Besøg side<i className="icon icon-link" /></a>}
                    </div>
                  </div>
                </div>

              </div>
            )
        )}

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  // Get the content of the md file by checking for it using the file name + the .md extension
  const postFileNames: string[] = fs.readdirSync('data/posts/projects');

  const projects: IProject[] = await Promise.all(postFileNames.map(
    (fn): Promise<IProject> => new Promise((res, rej) => {

      fs.readFile(path.join('data/posts/projects', fn), (err, data) => {

        if (err) {
          rej(err);
          return;
        }

        const { data: { title, role, url, skills: skillNames, images } } = matter(data.toString());

        res({
          title,
          slug: fn.replace('.md', ''),
          url,
          images,
          role,
          skills: getSkillObjectsFromArray(skillNames)
        });
      });

    })
  ))

  return {
    // Anything passed to the "props" object will be passed to the component as props.
    props: {
      projects
    }
  }
}

export default Projects
