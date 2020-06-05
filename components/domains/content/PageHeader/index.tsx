import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'components/reusables/NavLink';

export interface PageHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pageTitle?: string;
  mobileOnly?: boolean;
}

export const PageHeader = ({
  pageTitle,
  mobileOnly,
  className,
  children
}: PageHeaderProps) => {
  return (
    <div className={`${styles.wrapper} ${className || ''} content-page-header`}>

      <div className={`content ${styles.root} ${mobileOnly ? styles.mobileOnly : ''}`} >
        <div className="pageBackground" />
        <div className="d-flex justify-space-between" style={{ height: '100%', width: '100%' }}>

          <NavLink href="/" className={`d-flex align-center text-light ${styles.link}`}>
            <div className={`${styles.icon} pr-2 py-1`} >
              <img src={require('images/mainLogoOnly-white.png?size=60')} style={{ height: '100%' }} />
            </div>

            {pageTitle && <h1><span>{pageTitle}</span></h1>}
          </NavLink>

          {children}

        </div>

      </div>
    </div>

  )
}
