import styles from './styles.module.scss';
import { GetStaticProps } from 'next';
import { IProject } from 'models/interfaces/IProject';
import { NavLink } from 'components/reusables/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { PageHeader } from 'components/domains/content/PageHeader';
import { ProgressiveImageLoader } from 'components/reusables/ProgressiveImageLoader';
import { DynamicLocalImageSizes } from 'utils/images/getDynamicLocalImage';
import { ReplyIcon } from 'icons/Reply';
import { ArrowRightIcon } from 'icons/ArrowRight';
import { getProjectPosts } from 'utils/data/getProjectsPosts';
import { ProjectsPreview } from 'components/domains/portfolio/ProjectsPreview';

interface FrontPageProps {
  projects: IProject[];
}

const FrontPage = ({
  projects
}: FrontPageProps) => {

  return (

    <>
      <PageHeader hideTabTitle mobileOnly />

      <main className={`${styles.about} content-page-footer d-flex`}>
        <div className="content d-flex mt-a justify-space-between col-12">
          <div className={`${styles.secondaryText} text-left pb-3 mt-a text-light py-3`}>
            I build
              <div className="mt-2 mb-3">
              <span className="mx-0 fw-bold" style={{ lineHeight: 1, fontSize: '1.5em' }}>
                <div>
                  Fast<span className="text-secondary ml-2" style={{ fontSize: '.75em', fontWeight: 300 }}>&</span>
                </div>
                Focused
              </span>
            </div>
            User experiences
        </div>

          <div className="hide-lg d-flex flex-col align-end">

            <NavLink href={SiteRoutes.aboutMe} className={`d-block s-circle ${styles.profileImageButton}`}>
              <ProgressiveImageLoader src="profile.jpg" imageHeight="130px" style={{ width: 130, height: 130 }} staticImageSize={DynamicLocalImageSizes.xsmall} />
              <div className={styles.moreAboutMeIcon}>
                <ArrowRightIcon />
              </div>
            </NavLink>

            <div className="text-light text-italic mt-3" style={{ marginRight: 60 }}>
              Learn more about me
              <ReplyIcon className="ml-2" />
            </div>
          </div>
        </div>

        <div className={`text-light content mt-2 mb-3 d-flex flex-col col-12`} >
          <div className="divider-dark col-12" />

          <h5 className={`d-flex fw-medium ${styles.explainerSection}`} style={{ flexWrap: 'wrap' }}>
            <span className="mr-5 mt-2">
              👋 Martin Bøje Petersen
            </span>
            <span className="mt-2">
              💼 Full-stack Developer
            </span>
          </h5>
        </div>

        <div className={`${styles.content}`}>

          <div className={`${styles.workSection} content mb-4`}>
            <div className="d-flex align-end justify-space-between">
              <h4 className="text-light pr-1 pb-2" style={{ marginBottom: 0 }}>
                My work
            </h4>
            </div>
          </div>


          <div className="content">
            <ProjectsPreview projects={projects} />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<FrontPageProps> = async () => {
  return {
    props: {
      projects: (await getProjectPosts()).map(({ images, ...rest }): IProject => ({ ...rest, images: images.slice(0, 1) }))
    }
  }
}

export default FrontPage

