import React, { Component, useState } from 'react';
import styles from './Nav.module.scss';
// import LogoAndText from '../../images/mainLogo-white.png';
// import Logo from '../../images/mainLogoOnly-white.png';

import Link from 'next/link';

import { IMenuItem } from '../../../../models/interfaces/IMenuItem';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { NavLink } from '../NavLink';


const menuItems: IMenuItem[] = [
  {
    title: 'Om mig',
    url: '',
    icon: 'people',
    isExact: true
  },
  {
    title: 'Udvalgte Projekter',
    url: 'projects',
    icon: 'bookmark',
    isExact: false
  },
  {
    title: 'Kontakt',
    url: 'contact',
    icon: 'message',
    isExact: true
  }
]

export interface NavProps {
}

const Nav = () => {

  const windowWidth = useWindowWidth();
  const isInMobileView: boolean = windowWidth < 1200;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let navClass: string = '';
  let menuClass: string = '';

  if (isInMobileView && isMobileMenuOpen) {
    navClass = styles.navShown;
    menuClass = styles.menuShown;
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`${styles.nav} ${navClass}`}>
      {
        !isInMobileView ? (
          <Link href="/">
            <a onClick={closeMobileMenu} className={styles.logo} >
              <img src="/images/mainLogo-white.png" className="img-fit-contain" alt="MBP Media" />
            </a>
          </Link>
        ) : (
            <div className={styles.mobileMenu}>
              <Link href="/">
                <a className={styles.logoMobile} >
                  <img src="/images/mainLogoOnly-white.png" className="img-fit-contain" alt="MBP Media" />
                </a>
              </Link>
              <button onClick={toggleMobileMenu} className="btn btn-lg btn-primary">
                <i className={`icon ${isMobileMenuOpen ? 'icon-cross' : 'icon-menu'} mr-2`}></i>
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          )
      }

      <ul
        className={`${styles.menu} ${menuClass}`}
      >
        {
          menuItems.map((item, i: number) => {
            return (
              <span key={'navItem_' + i} className={styles.itemWrapper} >
                <NavLink onClick={closeMobileMenu} exact={item.isExact} activeClassName={styles.selected} href={`/${item.url}`} className={styles.menuItem}>
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
          <svg style={{ marginTop: -2 }} xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>
          LinkedIn
        </a>

        <a
          target='_blank'
          rel='noopener'
          href="https://github.com/JackTheDane"
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" /></svg>
          GitHub
        </a>

        <a
          target='_blank'
          rel='noopener'
          href="/documents/martin-boeje-petersen_cv.pdf"
          className={`btn btn-link ${styles.mediaPlatformsButton}`}
        >
          <i className="icon icon-people mr-2"></i>
          CV
        </a>
      </div>
    </nav>
  )
}

export default Nav;
