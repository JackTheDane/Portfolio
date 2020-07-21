import styles from './styles.module.scss';
import { BrandColors } from 'data/BrandColors';
import { UXIcon } from 'icons/UX';
import { BriefcaseIcon } from 'icons/Briefcase';
import { IExperienceItem } from 'models/interfaces/IExperienceItem';
import { ExperienceTimeline } from 'components/domains/experience/ExperienceTimeline';
import { EducationIcon } from 'icons/Education';
import { PageHeader } from 'components/domains/content/PageHeader';
import Head from 'next/head';
const KEALogo: string = require('images/brands/kea.png?size=60');

const coreSkills: {
  name: string;
  iconElement: JSX.Element;
}[] = [
    {
      name: "React",
      iconElement: <img src={require('images/tech/react.png?resize&size=50&inline')} alt="React logo" />
    },
    {
      name: "TypeScript",
      iconElement: <img className="s-rounded" src={require('images/tech/ts.png?resize&size=50&inline')} alt="TypeScript logo" />
    },
    {
      name: "JavaScript",
      iconElement: <img className="s-rounded" src={require('images/tech/js.png?resize&size=50&inline')} alt="JavaScript logo" />
    },
    {
      name: "CSS3",
      iconElement: <img src={require('images/tech/css.png?resize&size=50&inline')} alt="CSS3 logo" />
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
    endYear: <span className="text-light" style={{ fontWeight: 600 }}>Now</span>,
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
      <main className={`text-center justify-center content columns ${styles.experience}`}>

        <div className="column col-10 col-md-12">

          <div className="mb-3">
            <h2 className="text-light">
              Skills
            </h2>

            <div className={`d-flex justify-center text-light ${styles.coreSkills}`}>
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

          <div className="py-5 mt-2 text-light text-left">
            <div className="my-5">

              <h2 className="mb-5 pb-3">
                Work Experience
              </h2>

              <ExperienceTimeline items={experience} />
            </div>

            <div className="my-5">

              <h2 className="mb-5 pb-3">
                Education
              </h2>

              <ExperienceTimeline items={education} fallbackIcon={<EducationIcon style={{ fontSize: '1.5rem', transform: 'translateY(-5%)' }} />} />
            </div>
          </div>

        </div>


      </main>
    </>

  )
}

export default Experience
