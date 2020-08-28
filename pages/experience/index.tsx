import styles from './styles.module.scss';
import { BrandColors } from 'data/BrandColors';
import { UXIcon } from 'icons/UX';
import { IExperienceItem } from 'models/interfaces/IExperienceItem';
import { ExperienceTimeline } from 'components/domains/experience/ExperienceTimeline';
import { EducationIcon } from 'icons/Education';
import { PageHeader } from 'components/domains/content/PageHeader';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';
const KEALogo: string = require('images/brands/kea.png?size=60');

const coreSkills: {
  name: string;
  iconElement: JSX.Element;
}[] = [
    {
      name: "React",
      iconElement: <ProgressiveImageLoader src="tech/react.png" staticImageSize={DynamicLocalImageSizes.xsmall} imageHeight='100%' alt="React logo" />
    },
    {
      name: "TypeScript",
      iconElement: <ProgressiveImageLoader src="tech/ts.png" staticImageSize={DynamicLocalImageSizes.xsmall} imageHeight='100%' className="s-rounded" alt="TypeScript logo" />
    },
    {
      name: "JavaScript",
      iconElement: <ProgressiveImageLoader src="tech/js.png" staticImageSize={DynamicLocalImageSizes.xsmall} imageHeight='100%' className="s-rounded" alt="JavaScript logo" />
    },
    {
      name: "CSS3",
      iconElement: <ProgressiveImageLoader src="tech/css.png" staticImageSize={DynamicLocalImageSizes.xsmall} imageHeight='100%' alt="CSS3 logo" />
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

const experience: IExperienceItem[] = [
  {
    company: "PeopleNet A/S",
    workTitle: "Frontend Developer & IT Consultant",
    startYear: 2018,
    endYear: <span style={{ fontWeight: 600 }}>Now</span>,
    logoSrc: require('images/brands/peopleNet.png?size=60'),
    description: "PeopleNet is a Consultant Agency specializing in Microsoft solutions. My primary responsibility here have involved developing and maintaining intranet solutions for major Danish companies using React, TypeScript & SCSS Modules to interact with the Microsoft SharePoint REST API.",
  },
  {
    company: "MBP Media (Personal company)",
    workTitle: "IT & Design Consultant",
    startYear: 2017,
    endYear: 2018,
    description: "A one-person IT consultancy company that I used to do some client work on the side. This work included developing and maintaining WordPress sites for companies such as Hydr Esport, as well some graphic design work using Adobe InDesign.",
  },
  {
    company: "Dental Media ApS",
    workTitle: "Frontend- & WordPress Developer",
    startYear: 2017,
    endYear: 2018,
    logoSrc: require('images/brands/dentalMedia.jpg?size=60'),
    description: "Dental Media is a small Digital Marketing Agency with dentists as its primary target audience. My responsibilities at Dental Media included Custom-developed WordPress sites, Graphic Design, Frontend Development using jQuery & SCSS",
  }
];

const education: IExperienceItem[] = [
  {
    company: "Copenhagen School of Business and Technology (KEA)",
    workTitle: "Web Developer (BA)",
    description: "A 1½ year top-up for Multimedia Designer with a heavier focus on improving development skills. The education included: React, Angular 2+, Advanced JavaScript, Advanced PHP, MySQL, MongoDB, Web Security Practices, Design Patterns and more.",
    startYear: 2018,
    endYear: 2019,
    logoSrc: KEALogo
  },
  {
    company: "Copenhagen School of Business and Technology (KEA)",
    workTitle: "Multimedia Designer",
    description: "2 year education concerning the visual design and development of interactive web-based solutions. Technologies used include: HTML5, CSS3, JavaScript ES5+, jQuery, WordPress, PHP, UI Design Courses, Adobe Suite and more.",
    startYear: 2015,
    endYear: 2017,
    logoSrc: KEALogo
  }
];

const Experience = () => {
  return (
    <>
      <PageHeader pageTitle="Experience" mobileOnly />
      <main className={`justify-center text-light content ${styles.experience}`}>

        <div className="mb-5 mt-2 columns ">


          <div className="column col-sm-12">
            <h2 className="mb-0">
              About me
              </h2>
            <div className="divider-dark mt-3 mb-4"></div>
            <p>
              My name is Martin Bøje Petersen and I am a Danish Web Developer with +3 years of professional experiences and a love for creating excellent user experiences.
            </p>

            <p>
              I am an educated Multimedia Designer and have a bachelors degree in  Web Development, with an interest in all things related to the development process, from first requirement draft, to final deployment to the production server.
            </p>

          </div>

          <div className="column d-flex flex-col hide-lg align-center col-sm-12" style={{ flexGrow: 0 }}>
            <ProgressiveImageLoader className="s-circle" src="profile.jpg" imageHeight="170px" style={{ width: 170, height: 170, overflow: 'hidden' }} staticImageSize={DynamicLocalImageSizes.xsmall} />
            {/* <i className="mt-1">Me (2018)</i> */}
          </div>
        </div>

        <div className="mb-3 text-center">
          <h4>
            My skills include
            </h4>

          <div className={`d-flex text-center justify-center  ${styles.coreSkills}`}>
            {coreSkills.map(({ name, iconElement }): JSX.Element => {
              return (
                <div key={name}>
                  <figure className="d-flex flex-col align-center">
                    <div className={styles.skillIcon}>
                      {iconElement}
                    </div>
                    <figcaption className="mt-3 fw-medium">{name}</figcaption>
                  </figure>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`d-flex justify-center mx-a ${styles.secondarySkills}`}>
          {secondarySkills.map(
            (skillName): JSX.Element => <div key={skillName} className="chip mb-3 mr-3 text-light p-3">{skillName}</div>
          )}
        </div>

        <div className="py-5 mt-2  text-left">
          <div className="my-5">

            <h2 className="mb-0">
              Work Experience
              </h2>

            <div className="divider-dark mt-3 mb-5"></div>

            <ExperienceTimeline items={experience} />
          </div>

          <div className="my-5">

            <h2 className="mb-0">
              Education
              </h2>

            <div className="divider-dark mt-3 mb-5"></div>

            <ExperienceTimeline items={education} fallbackIcon={<EducationIcon style={{ fontSize: '1.5rem', transform: 'translateY(-5%)' }} />} />
          </div>
        </div>

      </main>
    </>

  )
}

export default Experience
