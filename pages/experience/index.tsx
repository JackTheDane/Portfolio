import styles from './styles.module.scss';
import Link from 'next/link';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { LinkedInIcon } from 'icons/LinkedIn';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { BrandColors } from 'data/BrandColors';
import { UserIcon } from 'icons/User';
import { DynamicLocalImageSizes, getDynamicLocalImage } from 'utils/images/getDynamicLocalImage';

const coreSkills: string[] = [
  "JavaScript ES6+",
  "ReactJS",
  "TypeScript",
  "CSS3",
  "UX",
];

const secondarySkills: string[] = [
  "NodeJS",
  "WordPress",
  "PHP",
  "MySQL",
  "SCSS",
  "Angular 2+",
  "Responsive web design"
];

const workExperience: {
  company: string;
  description: string;
  workTitle: string;
  startYear: number | string;
  endYear: number | string;
}[] = [
    {
      company: "Dental Media",
      workTitle: "Frontend- & WordPress dev",
      description: "Test",
      startYear: 2016,
      endYear: 2018
    }
  ]

const Experience = () => {
  return (
    <div className={`content-page content ${styles.experience}`}>

      <div className="mb-5">
        <div className="mb-5">
          <h3 className="text-light">
            Core skills
          </h3>

          <div className="d-flex">
            {coreSkills.map((skillName): JSX.Element => {
              return (
                <div className="chip mr-2">{skillName}</div>
              )
            })}
          </div>
        </div>



        <h4 className="text-light">
          Secondary skills
        </h4>

        <div className="d-flex">
          {secondarySkills.map((skillName): JSX.Element => {
            return (
              <div className="chip mr-2">{skillName}</div>
            )
          })}
        </div>
      </div>



      <div className="divider my-5" />

      {/* <h2 className="text-light text-center">
        Experience
      </h2> */}

      <div className="columns text-light">
        <div className="column col-md-12 py-3 text-right">
          <h4>
            Work
          </h4>
          <div className="divider-primary" />

          {workExperience.map(({
            company,
            workTitle,
            description,
            endYear,
            startYear
          }): JSX.Element => (
              <div>
                <div>{company} </div>
                <div>{workTitle}</div>
                <small>{startYear} - {endYear}</small>
                <div>{description}</div>
              </div>
            ))}


        </div>
        <div className="divider-vert column" style={{ flexGrow: 0 }} />
        {/* <div className="column" style={{ flexGrow: 0 }} /> */}
        <div className="column col-md-12 py-3">
          <h4>
            Education
          </h4>
          <div className="divider-primary" />

          {workExperience.map(({
            company,
            workTitle,
            description,
            endYear,
            startYear
          }): JSX.Element => (
              <div>
                <div>{company} </div>
                <div>{workTitle}</div>
                <small>{startYear} - {endYear}</small>
                <div>{description}</div>
              </div>
            ))}

        </div>
      </div>






      {/* <div className="d-flex text-light" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1 className="mb-0">Skills & Experience</h1>

        <a href={OutboundRoutes.linkedIn} className="d-flex text-light" style={{ alignItems: 'inherit', textDecoration: 'none' }}>
          <span className="hide-sm" style={{ marginBottom: '-.1em' }}>
            Want to learn more?
          </span>
          <button className="btn btn-primary ml-3" style={{ backgroundColor: BrandColors.LinkedIn, border: 'none' }}>
            <LinkedInIcon />
            <span className="hide-sm ml-2">
              Visit my LinkedIn
            </span>
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
      </div> */}

    </div>
  )
}

export default Experience
