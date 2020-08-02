import React, { useEffect, useState, useRef } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IProject } from 'models/interfaces/IProject';
import { GetStaticProps } from 'next';
import styles from './styles.module.scss';
import { MarkdownRenderer } from 'components/reusables/MarkdownRenderer';
import { useElementHeight } from 'hooks/useElementHeight';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { NavLink } from 'components/reusables/NavLink';
import { ArrowLeftIcon } from 'icons/ArrowLeft';
import { LinkIcon } from 'icons/Link';
import { CarouselWithPreview } from 'components/reusables/carousels/CarouselWithPreview';
import { PageHeader } from 'components/domains/content/PageHeader';
import { getDynamicLocalImage, DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';
import { GitHubIcon } from 'icons/Github';
import { BrandColors } from 'data/BrandColors';

interface ProjectPaginationItem {
  title: string;
  slug: string;
  previewImage: string;
}

interface ProjectPageProps extends IProject {
  markdown: string;
  paginationItems: {
    prev: ProjectPaginationItem;
    next: ProjectPaginationItem;
  }
}

const ProjectPage = ({
  images,
  github,
  skills,
  title,
  url,
  markdown,
  paginationItems,
  slug
}: ProjectPageProps) => {

  const [showMoreContent, setShowMoreContent] = useState(false);
  const contentElement = useRef<HTMLDivElement>(null);
  const contentElementHeight: number = useElementHeight(contentElement);

  const isContentTooTall: boolean = contentElementHeight > 499;

  // If the slug changes -> Scroll to top of mainContent container
  useEffect(() => {
    setShowMoreContent(false);
  }, [slug]);


  return (
    <div className="d-flex flex-col" style={{ minHeight: '100%' }}>

      <PageHeader pageTitle={title} className="pt-0 mb-0" mobileOnly />

      <main className={`${styles.project}`}>

        <div style={{ position: 'relative' }}>
          <div className={styles.sliderActions}>
            <NavLink href={`/${SiteRoutes.portfolio}`} className={`${styles.backButton} text-light btn btn-primary btn-lg my-3`}>
              <ArrowLeftIcon className="mr-2" />
              <span>
                Other projects
              </span>
            </NavLink>
          </div>

          <CarouselWithPreview key={slug} images={images} />
        </div>


        <div className="content pb-4 d-flex bg-light" style={{ flexDirection: 'column', flexGrow: 1 }}>
          <div className="mt-3">
            <div className="d-flex mb-2" style={{ alignItems: 'center' }}>
              <h2 className={`text-primary mb-0 ${styles.title}`}>
                {title}
              </h2>

              {url
                && (
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener'
                    data-tooltip="View live site"
                    className={`btn btn-action btn-primary tooltip tooltip-right ml-3 ${styles.siteLinkButton}`}
                  >
                    <LinkIcon />
                  </a>
                )
              }

              {github
                && (
                  <a
                    href={github}
                    target='_blank'
                    rel='noopener'
                    data-tooltip="View repository"
                    className={`btn btn-action btn-primary tooltip tooltip-right ml-3 ${styles.siteLinkButton}`}
                    style={{ backgroundColor: BrandColors.GitHub, border: 'none' }}
                  >
                    <GitHubIcon />
                  </a>
                )
              }
            </div>

            <div className="d-flex" style={{ alignItems: 'center', flexWrap: 'wrap' }}>

              <div style={{ flexShrink: 0, maxWidth: '100%' }}>
                {
                  skills &&
                  <div>
                    {skills.map(skill => (
                      <div className="label mr-2 mb-2" key={skill} style={{ fontSize: '.75rem' }}>{skill}</div>
                    ))}
                  </div>
                }
              </div>

            </div>
          </div>

          <div className="divider my-3" />

          <div style={{ position: 'relative' }}>
            <div className={`${styles.content}`} ref={contentElement} style={{ maxHeight: !showMoreContent ? 500 : 'none' }}>
              <MarkdownRenderer markdown={markdown} />
            </div>
            {
              isContentTooTall && !showMoreContent && (
                <button className={`btn btn-link d-block ${styles.showMoreButton}`} onClick={() => setShowMoreContent(true)}>Show more</button>
              )
            }
          </div>


          {
            paginationItems && (
              <ul className="pagination pt-3 mt-a">
                {paginationItems.prev && (
                  <li key={paginationItems.prev.slug} className="page-item page-prev">
                    <NavLink href={`/${SiteRoutes.portfolio}/[slug]`} as={`/${SiteRoutes.portfolio}/${paginationItems.prev.slug}`}>
                      <div className={`s-rounded ${styles.previewImage}`} style={{ backgroundImage: `url('${getDynamicLocalImage(paginationItems.prev.previewImage, DynamicLocalImageSizes.xsmall)}')` }} />
                      <div className="page-item-subtitle">Previous</div>
                      <div className="page-item-title h5">{paginationItems.prev.title}</div>
                    </NavLink>
                  </li>
                )}
                {paginationItems.next && (
                  <li key={paginationItems.next.slug} className="page-item page-next">
                    <NavLink className="d-flex flex-col" href={`/${SiteRoutes.portfolio}/[slug]`} as={`/${SiteRoutes.portfolio}/${paginationItems.next.slug}`}>
                      <div className={`s-rounded ml-a ${styles.previewImage}`} style={{ backgroundImage: `url('${getDynamicLocalImage(paginationItems.next.previewImage, DynamicLocalImageSizes.xsmall)}')` }} />
                      <div className="page-item-subtitle">Next</div>
                      <div className="page-item-title h5">{paginationItems.next.title}</div>
                    </NavLink>
                  </li>
                )}
              </ul>
            )
          }

        </div>
      </main>
    </div>
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

  // Get all files
  const files: string[] = fs.readdirSync('data/posts/projects');

  let paginationItems: {
    prev: ProjectPaginationItem;
    next: ProjectPaginationItem;
  };

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Check if the item is the current project's MD file
    if (file === `${slug}.md`) {

      let prevFileIndex = i - 1;
      let nextFileIndex = i + 1;

      if (prevFileIndex < 0) {
        prevFileIndex = files.length - 1;
      } else if (nextFileIndex >= files.length) {
        nextFileIndex = 0;
      }

      const prevFileName: string = files[prevFileIndex];
      const nextFileName: string = files[nextFileIndex];


      const prevInfo = matter(fs.readFileSync(path.join('data/posts/projects', prevFileName)).toString());
      const nextInfo = matter(fs.readFileSync(path.join('data/posts/projects', nextFileName)).toString());

      // If yes, get the previous and next projects
      paginationItems = {
        prev: {
          previewImage: prevInfo.data.images[0],
          slug: prevFileName.replace('.md', ''),
          title: prevInfo.data.title
        },
        next: {
          previewImage: nextInfo.data.images[0],
          slug: nextFileName.replace('.md', ''),
          title: nextInfo.data.title
        }
      }

      break;
    }

  }

  // Get the content of the md file by checking for it using the file name + the .md extension
  const markdownWithMetadata = fs.readFileSync(path.join('data/posts/projects', `${slug}.md`)).toString();

  const { content, data: {
    title,
    url,
    role,
    github,
    images,
    skills
  } } = matter(markdownWithMetadata);

  return {
    // Anything passed to the "props" object will be passed to the component as props.
    props: {
      markdown: content,
      paginationItems,
      images,
      role,
      title,
      url: url || '',
      github: github || '',
      skills,
      slug: slug as string
    }
  }
}

export default ProjectPage;
