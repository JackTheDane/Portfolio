import React, { useState } from 'react';
import styles from './styles.module.scss';
// import LogoAndText from '../../images/mainLogo-white.png';
// import Logo from '../../images/mainLogoOnly-white.png';

import Link from 'next/link';

import { IMenuItem } from '../../../../models/interfaces/IMenuItem';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { NavLink } from '../NavLink';
import { LinkedIn } from '../../icons/LinkedIn';
import { Github } from '../../icons/Github';


const menuItems: IMenuItem[] = [
  {
    title: 'About me',
    url: '',
    icon: 'people',
    isExact: true
  },
  {
    title: 'Projects',
    url: 'projects',
    icon: 'bookmark',
    isExact: false
  },
  {
    title: 'Contact',
    url: 'contact',
    icon: 'message',
    isExact: true
  }
]

export interface NavProps {
}

const Nav = () => {

  const windowWidth = useWindowWidth();

  let navClass: string = '';

  return (
    <nav className={`${styles.nav} ${navClass}`}>

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
                    {item.icon && <i className={`icon icon-${item.icon} ${styles.itemIcon}`} />}
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
          href="https://www.linkedin.com/in/martin-b%C3%B8je-petersen-74459173/"
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <LinkedIn style={{ marginTop: -2 }} />
          LinkedIn
        </a>

        <a
          target='_blank'
          rel='noopener'
          href="https://github.com/JackTheDane"
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <Github />
          GitHub
        </a>

        <a
          target='_blank'
          rel='noopener'
          href="/documents/martin-boeje-petersen_cv.pdf"
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <i className="icon icon-people mr-2" />
          CV
        </a>
      </div>
      <div className={`${styles.mobileMenu} btn-group btn-group-block`}>
        {
          menuItems.map((item, i: number) => {
            return (
              <NavLink exact={item.isExact} key={'ni_' + i} activeClassName="active" href={`/${item.url}`} className={`btn btn-primary btn-lg ${styles.mobileMenuItem}`}>
                <i className={`icon icon-${item.icon}`} />
                {item.title}
              </NavLink>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Nav;
