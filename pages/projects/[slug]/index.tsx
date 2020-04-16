import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import { IProject } from '../../../models/interfaces/IProject';
import { GetStaticProps } from 'next';
import { getSkillObjectsFromArray } from '../../../utils/skills/getSkillObjectsFromArray';
import styles from './project.module.scss';
import { Carousel } from '../../../components/reusables/Carousel/Carousel';
import Link from 'next/link';

interface ProjectPageProps extends Omit<IProject, 'slug'> {
  body: string;
}

const ProjectPage = ({
  images,
  role,
  skills,
  title,
  url,
  body
}: ProjectPageProps) => {
  return (
    <>
      <Head>
        <title>
          {title} - Martin Bøje Petersen
        </title>
      </Head>
      <div className={`${styles.project}`}>

        <div style={{ position: 'relative' }}>
          <Carousel images={images} />
          <Link href='/projects'>
            <a className={styles.backButton}>
              <i className="icon icon-back mr-2" />
              <span>
                Other projects
              </span>
            </a>
          </Link>
        </div>


        <div className="px-5 py-1">

          <div className="padx-xs mt-3">

            <div className="d-flex" style={{ alignItems: 'center' }}>
              <h2 className={`text-primary mb-2 transition-elem delay-1 ${styles.title}`}>
                {title}
              </h2>

              {url
                && (
                  <a
                    href={url}
                    title="View live site"
                    target='_blank'
                    rel='noopener'
                    className={`btn btn-primary ml-3 ${styles.siteLinkButton}`}
                  >
                    <i className="icon icon-link" />
                  </a>
                )
              }
            </div>

            <div className="d-flex" style={{ alignItems: 'center' }}>
              <h3 className="text-gray fw-medium">{role}</h3>

              <div className="mx-3">
                {
                  skills &&
                  <div>
                    {
                      skills.map(skill => <div className="chip mr-2 mb-2" key={'skill_' + skill.name} style={{ fontSize: '.7rem' }}>
                        {/* <img src={skill.img} className="avatar avatar-sm" /> */}
                        {skill.name}
                      </div>)
                    }

                  </div>
                }
              </div>

            </div>

          </div>

          <div className="divider transition-elem delay-1 my-3"></div>

          <div className="transition-elem delay-1 my-5 padx-xs">
            <article dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>

      </div>
    </>
  )
}

/**
 * This is used to determine the paths during export
 */
export const getStaticPaths = async () => {

  // Get all of the file names from the "projects" folder
  const files = fs.readdirSync('data/posts/projects');

  return {
    // Create a route for each md file
    paths: files.map((filename: string) => ({
      params: { // Set the params for each file
        slug: filename.replace('.md', '') // Set the slug of the file to be the filename without the .md extension
      }
    })),
    fallback: false
  }
}


/**
 * Used to set the props for the page during export.
 * Anything set here will be passed as props to the component during export.
 */
export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params: { slug } }) => {

  // Get the content of the md file by checking for it using the file name + the .md extension
  const markdownWithMetadata = fs.readFileSync(path.join('data/posts/projects', `${slug}.md`)).toString();

  const { content, data: {
    title,
    url,
    role,
    images,
    skills: skillNames
  } } = matter(markdownWithMetadata);

  const body: string = marked(content);

  return {
    // Anything passed to the "props" object will be passed to the component as props.
    props: {
      body,
      images,
      role,
      title,
      url,
      skills: getSkillObjectsFromArray(skillNames)
    }
  }
}

export default ProjectPage;
