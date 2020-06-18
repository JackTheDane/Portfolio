import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { NavLink } from 'components/reusables/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { useState, useEffect } from 'react';
// const bgImage = require('images/bg.jpg?size=800');

const AppCustomized = ({ Component, pageProps }: AppProps) => {

  const { pathname } = useRouter();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const onRouteChangeCompleted = (): void => {
    setIsRedirecting(false);
  }

  const onRouteChangeStarted = (): void => {
    setIsRedirecting(true);
  }


  // Router.


  useEffect(
    () => {
      Router.events.on('routeChangeStart', onRouteChangeStarted);
      Router.events.on('routeChangeComplete', onRouteChangeCompleted);
      Router.events.on('routeChangeError', onRouteChangeCompleted);
      return () => {
        Router.events.off('routeChangeStart', onRouteChangeStarted);
        Router.events.off('routeChangeComplete', onRouteChangeCompleted);
        Router.events.off('routeChangeError', onRouteChangeCompleted);
      }
    }, []);

  const isFrontPage: boolean = pathname === `/${SiteRoutes.frontpage}`;

  let contentClasses: string = styles.content;

  if (isRedirecting) contentClasses += ` ${styles.redirecting}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#175397" />
        <meta name="theme-color" content="#175397" />
        <meta name="msapplication-TileColor" content="#175397" />
        <meta name="msapplication-navbutton-color" content="#175397" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />


        <title>
          Martin Bøje Petersen
        </title>
      </Head>
      <div className={`${styles.app} ${isFrontPage ? styles.frontPage : ''}`}>
        <div className="pageBackground" />

        <Nav />

        <div className={styles.spacer} />
        <div className={contentClasses} id="_mainContent">
          <Component {...pageProps} />
        </div>

        <style jsx global>{`
        main {
          visibility: hidden;
        }

        .pageBackground::before {
          background-image: url('${ require('images/bg.jpg?inline')}')
        }
      `}</style>
        <script></script>
      </div>
    </>

  )
}

export default AppCustomized;
