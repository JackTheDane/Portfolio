import styles from './styles.module.scss';
import { BrandColors } from 'data/BrandColors';
import { UXIcon } from 'icons/UX';
import { BriefcaseIcon } from 'icons/Briefcase';
import { IExperienceItem } from 'models/interfaces/IExperienceItem';
import { ExperienceTimeline } from 'components/domains/experience/ExperienceTimeline';
import { EducationIcon } from 'icons/Education';

const coreSkills: {
  name: string;
  iconElement: JSX.Element;
}[] = [
    {
      name: "React",
      iconElement: <img src={require('images/tech/react.png?size=60')} alt="React logo" />
    },
    {
      name: "TypeScript",
      iconElement: <img className="s-rounded" src={require('images/tech/ts.png?size=60')} alt="TypeScript logo" />
    },
    {
      name: "JavaScript",
      iconElement: <img className="s-rounded" src={require('images/tech/js.png?size=60')} alt="JavaScript logo" />
    },
    {
      name: "CSS3",
      iconElement: <img src={require('images/tech/css.png?size=60')} alt="CSS3 logo" />
    },
    {
      name: "UX Design",
      iconElement: <div className={`${styles.roundIcon} s-circle ${styles.uxDesignIcon}`} style={{ backgroundColor: BrandColors.GitHub }}><UXIcon className="d-flex" /></div>
    }
  ];

const secondarySkills: string[] = [
  "Next.js",
  "Node.js",
  "SCSS/Sass",
  "Responsive design",
  "Adobe XD",
  "WordPress",
  "PHP",
  "MySQL",
  "HTML5"
];

const workExperience: IExperienceItem[] = [
  {
    company: "PeopleNet A/S",
    workTitle: "Frontend- & WordPress dev",
    description: "Test",
    startYear: 2016,
    endYear: 'Now'
  },
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
    <div className={`content-page text-center content ${styles.experience}`}>

      <div className="mb-5">
        <div className="mb-3">
          <h2 className="text-light">
            Skills
          </h2>

          <div className="d-flex justify-center text-light" style={{ flexWrap: 'wrap' }}>
            {coreSkills.map(({ name, iconElement }): JSX.Element => {
              return (
                <div>
                  <figure className="d-flex flex-col align-center">
                    <div className={styles.skillIcon}>
                      {iconElement}
                    </div>
                    <caption className="mt-3 fw-medium">{name}</caption>
                  </figure>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`d-flex justify-center mx-a ${styles.secondarySkills}`}>
          {secondarySkills.map((skillName): JSX.Element => {
            return (
              <div className="chip mb-3 mr-3 text-light p-3">{skillName}</div>
            )
          })}
        </div>
      </div>

      <div className="py-5 columns text-light text-left">
        <div className="my-5 column col-md-12">

          <h2 className="mb-3">
            Experience
          </h2>

          <div className="divider-primary mb-5 mr-5" />

          <ExperienceTimeline items={workExperience} />
        </div>

        {/* <div className="divider-vert column" style={{ flex: '0 0' }} /> */}


        <div className="my-5 column col-md-12">

          <h2 className="mb-3">
            Education
          </h2>

          <div className="divider-primary mb-5 mr-3" />

          <ExperienceTimeline items={workExperience} />
        </div>
      </div>


    </div>
  )
}

export default Experience
