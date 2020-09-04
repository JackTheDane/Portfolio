import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { useState, useEffect } from 'react';

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
        setTimeout(() => setBackgroundImage(newImg.src), 1000);
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
          background-image: url('${backgroundImage}')
        }

        .pageBackground.placeholder {
          transition: opacity .6s ease-in-out;
        }

        .pageBackground.placeholder::before {
          background-image: url('${require('images/bg.jpg?lqip')}')
        }
      `}</style>
        <script></script>
      </div>
    </>

  )
}

export default AppCustomized;
