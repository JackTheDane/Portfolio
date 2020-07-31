import React from 'react'
import { IProject } from 'models/interfaces/IProject'
import { ProjectCardClasses, ProjectCard } from '../ProjectCard';
import { NavLink } from 'components/reusables/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { getDynamicLocalImage, DynamicLocalImageTypes } from 'utils/images/getDynamicLocalImage';
import { CloneIcon } from 'icons/Clone';
import { BaseCarousel } from 'components/reusables/carousels/BaseCarousel';
import styles from './styles.module.scss';


export interface IProjectsPreview {
  projects: IProject[];
}

const projectClasses: ProjectCardClasses = {
  image: styles.projectImage
};

export const ProjectsPreview = ({
  projects
}: IProjectsPreview) => {

  const portfolioPreviews: JSX.Element[] = projects.slice(0, 2).map(
    (project): JSX.Element => (
      <div key={project.slug} className={`${styles.projectColumn}`}>
        <ProjectCard imageHeight="0px" project={project} classes={projectClasses} />
      </div>
    )
  );

  portfolioPreviews.push(
    <NavLink
      href={`/${SiteRoutes.portfolio}`}
      className={`${styles.projectColumn} ${styles.viewMoreSlide} ${styles.projectImage} d-flex text-center text-light card`}
    >
      <div className={styles.bg} style={{ backgroundImage: `url(${getDynamicLocalImage((projects[2] || projects[projects.length - 1]).images[0], DynamicLocalImageTypes.lqip)})` }} />

      <CloneIcon className={styles.normalIcon} />

      <div className={`my-3 ${styles.viewMoreSlideText}`}>
        View all projects
      </div>
    </NavLink>
  );

  return (
    <div className={styles.root}>
      <BaseCarousel
        slidesPerView="auto"
        spaceBetween={0}
        children={portfolioPreviews}
        centerInsufficientSlides={true}
        classNames={{
          nextNavButton: styles.nextSlideButton,
          prevNavButton: styles.prevSlideButton
        }}
      />
    </div>
  )
}
