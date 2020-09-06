import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { useState, useEffect } from 'react';

const bgImageLqip: string = require('images/bg.jpg?lqip');

const AppCustomized = ({ Component, pageProps }: AppProps) => {

  const { pathname } = useRouter();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const onRouteChangeCompleted = (): void => {
    setIsRedirecting(false);
  }

  const onRouteChangeStarted = (): void => {
    setIsRedirecting(true);
  }


  useEffect(
    () => {
      Router.events.on('routeChangeStart', onRouteChangeStarted);
      Router.events.on('routeChangeComplete', onRouteChangeCompleted);
      Router.events.on('routeChangeError', onRouteChangeCompleted);

      // Load image in background using dummy image
      const newImg = new Image;
      newImg.onload = function () { // Once loaded, set as background image
        setBackgroundImage(newImg.src);
      }
      newImg.src = require('images/bg.jpg');

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

        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#144777" />
        <meta name="theme-color" content="#144777" />
        <meta name="msapplication-TileColor" content="#144777" />
        <meta name="msapplication-navbutton-color" content="#144777" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="Keywords" content="React,TypeScript,Web,Developer,Frontend,Full,stack,CSS,SQL,PHP,WordPress" />
        <meta name="Description"
          content="Danish Web Developer with +3 years of professional experiences and a love for creating excellent user experiences." />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>
          Martin Bøje Petersen
        </title>
      </Head>

      <div className={`${styles.app} ${isFrontPage ? styles.frontPage : ''}`}>
        <div className="pageBackground" />
        <div className="pageBackground placeholder" style={{ opacity: backgroundImage ? 0 : 1 }} />

        <Nav />

        <div className={styles.spacer} />
        <div className={contentClasses} id="_mainContent">
          <Component {...pageProps} />
        </div>

        <style jsx global>{`
        main {
          display: none;
        }

        nav,
        a {
          visibility: hidden;
        }

        .pageBackground::before {
          background-image: url('${backgroundImage || bgImageLqip}')
        }

        .pageBackground.placeholder::before {
          background-image: url('${bgImageLqip}')
        }
      `}</style>
        <script></script>
      </div>
    </>

  )
}

export default AppCustomized;
