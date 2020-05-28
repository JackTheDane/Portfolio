import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NavLink } from 'components/reusables/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'utils/SSR/useIsomorphicLayoutEffect';
// const bgImage = require('images/bg.jpg?size=800');

const AppCustomized = ({ Component, pageProps }: AppProps) => {

  const { pathname } = useRouter();

  const isFrontPage: boolean = pathname === `/${SiteRoutes.frontpage}`;

  const [isMobileNavShown, setIsMobileNavShown] = useState<boolean>(false);

  useScrollPosition(({
    currPos
  }) => {
    const newVal: boolean = currPos.y > 0;

    if (isMobileNavShown !== newVal) setIsMobileNavShown(newVal);
  }, [isMobileNavShown, pathname], 50);

  useIsomorphicLayoutEffect(() => {
    if (window && window.scrollY > 0 && !isMobileNavShown) setIsMobileNavShown(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Martin Bøje Petersen
        </title>
      </Head>
      <div className={`${styles.app} ${isFrontPage ? styles.frontPage : '' }`}>
        <div className="pageBackground" />

        <div className={`content ${styles.mobileTopNavBar} ${isMobileNavShown ? styles.shown : ''}`} >
          <div className="pageBackground" style={{ position: 'absolute' }} />
          <NavLink href="/" >
            <img src={require('images/mainLogoOnly-white.png?size=60')} style={{ height: '100%' }} />
          </NavLink>
        </div>

        <Nav />

        <div className={styles.spacer} />
        <main className={styles.content} id="_mainContent">
          <Component {...pageProps} />
        </main>

        <style jsx global>{`
        .pageBackground::before {
          background-image: url('${ require('images/bg.jpg?inline')}')
        }
      `}</style>
      </div>
    </>

  )
}

export default AppCustomized;
