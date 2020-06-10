import React from 'react'
import { NavLink } from 'components/reusables/NavLink'
import { SiteRoutes } from 'data/routes/SiteRoutes'
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader'
import { DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage'
import { IProject } from 'models/interfaces/IProject'

export interface ProjectCardProps {
  classes?: ProjectCardClasses;
  project: IProject;
  imageHeight?: string;
}

export interface ProjectCardClasses {
  root?: string;
  image?: string;
  imageWrapper?: string;
  cardHeader?: string;
}

export const ProjectCard = ({
  project: {
    images,
    skills,
    title,
    slug
  },
  imageHeight,
  classes
}: ProjectCardProps) => {

  let rootClass: string = 'card';
  let imageClass: string = '';
  let imageWrapperClass: string = 's-rounded';
  let cardHeaderClass: string = 'card-header card-title text-light py-3';

  if (classes) {
    if (classes.root) rootClass += ` ${classes.root}`;
    if (classes.image) imageClass += ` ${classes.image}`;
    if (classes.imageWrapper) imageWrapperClass += ` ${classes.imageWrapper}`;
    if (classes.cardHeader) cardHeaderClass += ` ${classes.cardHeader}`;
  }



  return (
    <NavLink
      className={rootClass}
      href={`/${SiteRoutes.portfolio}/[slug]`}
      as={`/${SiteRoutes.portfolio}/${slug}`}
      style={{ overflow: 'hidden' }}
    >
      <div className={imageWrapperClass}>
        <ProgressiveImageLoader className={imageClass} src={images[0]} imageHeight={imageHeight || '50%'} staticImageSize={DynamicLocalImageSizes.small} />
      </div>

      <h5 className={cardHeaderClass}>
        {title}
        <small className="d-block text-gray mt-1">
          {skills.slice(0, 3).join(', ')}
        </small>
      </h5>
    </NavLink>
  )
}
