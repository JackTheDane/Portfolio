import React from 'react';
import styles from './styles.module.scss';
// import LogoAndText from '../../images/mainLogo-white.png';
// import Logo from '../../images/mainLogoOnly-white.png';

import Link from 'next/link';

import { IMenuItem } from 'models/interfaces/IMenuItem';
import { NavLink } from '../NavLink';
import { LinkedInIcon } from 'icons/LinkedIn';
import { GitHubIcon } from 'icons/Github';
import { CloneIcon } from 'icons/Clone';
import { PaperPlaneIcon } from 'icons/PaperPlane';
import { PaperclipIcon } from 'icons/Paperclip';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { ListIcon } from 'icons/List';


const menuItems: IMenuItem[] = [
  {
    title: 'Portfolio',
    url: SiteRoutes.portfolio,
    icon: <CloneIcon />,
    isExact: false
  },
  {
    title: 'Experience',
    url: SiteRoutes.aboutMe,
    icon: <ListIcon />,
    isExact: true
  },
  {
    title: 'Get in touch!',
    url: SiteRoutes.contact,
    icon: <PaperPlaneIcon />,
    isExact: true
  }
]

export interface NavProps {
}

const Nav = () => {

  return (
    <nav className={`${styles.nav}`}>

      <Link href="/">
        <a className={styles.logo} >
          <img src="/images/mainLogo-white.png" className="img-fit-contain" alt="MBP Media" />
        </a>
      </Link>
      <ul
        className={`${styles.menu}`}
      >
        {
          menuItems.map((item, i: number) => {
            return (
              <span key={'navItem_' + i} className={styles.itemWrapper} >
                <NavLink exact={item.isExact} activeClassName={styles.selected} href={`/${item.url}`} className={styles.menuItem}>
                  <li>
                    {item.icon && (
                      <span className="mr-3 mt-2">
                        {item.icon}
                      </span>
                    )}

                    {/* {item.icon && <i className={`icon icon-${item.icon} ${styles.itemIcon}`} />} */}
                    {item.title}
                  </li>
                </NavLink>
              </span>
            )
          })
        }
      </ul>

      <div className={styles.mediaPlatforms}>

        <a
          target='_blank'
          rel='noopener'
          href={OutboundRoutes.linkedIn}
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <LinkedInIcon style={{ marginTop: -2 }} className="mr-2" />
          LinkedIn
        </a>

        <a
          target='_blank'
          rel='noopener'
          href={OutboundRoutes.gitHub}
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <GitHubIcon className="mr-2" />
          GitHub
        </a>

        <a
          target='_blank'
          rel='noopener'
          href={OutboundRoutes.CV}
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <PaperclipIcon className="mr-2" />
          CV
        </a>
      </div>
      <div className={`${styles.mobileMenu} btn-group btn-group-block`}>
        {
          menuItems.map((item, i: number) => {
            return (
              <NavLink exact={item.isExact} key={'ni_' + i} activeClassName="active" href={`/${item.url}`} className={`btn btn-primary btn-lg ${styles.mobileMenuItem}`}>
                {item.icon}
                <span className="mt-1 fw-light" style={{ fontSize: '.9em' }}>{item.title}</span>
              </NavLink>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Nav;
