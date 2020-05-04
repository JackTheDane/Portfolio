import styles from './styles.module.scss';
import Link from 'next/link';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { LinkedInIcon } from 'icons/LinkedIn';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { BrandColors } from 'data/BrandColors';
import { UserIcon } from 'icons/User';
import { DynamicLocalImageSizes, getDynamicLocalImage } from 'utils/images/getDynamicLocalImage';

const Experience = () => {
  return (
    <div className={`content-page content ${styles.experience}`}>

      <div className="d-flex text-light" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1 className="mb-0">Skills & Experience</h1>

        <a href={OutboundRoutes.linkedIn} className="d-flex text-light" style={{ alignItems: 'inherit', textDecoration: 'none' }}>
          <span className="hide-sm" style={{ marginBottom: '-.1em' }}>
            Want to learn more?
          </span>
          <button className="btn btn-primary ml-3" style={{ backgroundColor: BrandColors.LinkedIn, border: 'none' }}>
            <span className="hide-sm mr-3">
              Visit my LinkedIn
            </span>
            <LinkedInIcon />
          </button>
        </a>
      </div>

      <div className="divider my-5" />

      <div className="text-light">
        <h3>
          Job experience
        </h3>

        <div className="tile">
          <div className="tile-icon">
            <div className="avatar avatar-lg">
              <img src={getDynamicLocalImage('profile.jpg', DynamicLocalImageSizes.xsmall)} />
            </div>
          </div>
          <div className="tile-content">
            <p className="tile-title">
              <b>Current job:</b> PeopleNet A/S
            </p>
            <p className="tile-subtitle">
              This is my current job.
            </p>
          </div>
        </div>

        <div className="tile">
          <div className="tile-icon">
            <div className="avatar avatar-lg">
              <img src={getDynamicLocalImage('profile.jpg', DynamicLocalImageSizes.xsmall)} />
            </div>
          </div>
          <div className="tile-content">
            <p className="tile-title">
              <b>Current job:</b> PeopleNet A/S
            </p>
            <p className="tile-subtitle">
              This is my current job.
            </p>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Experience
