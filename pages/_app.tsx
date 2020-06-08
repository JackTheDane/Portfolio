import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { NavLink } from 'components/reusables/NavLink';
import { SiteRoutes } from 'data/routes/SiteRoutes';
import { useState } from 'react';
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
  Router.events.on('routeChangeStart', onRouteChangeStarted);
  Router.events.on('routeChangeComplete', onRouteChangeCompleted);
  Router.events.on('routeChangeError', onRouteChangeCompleted);

  const isFrontPage: boolean = pathname === `/${SiteRoutes.frontpage}`;

  let contentClasses: string = styles.content;

  if (isRedirecting) contentClasses += ` ${styles.redirecting}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="#175397" name="theme-color" />
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
        .pageBackground::before {
          background-image: url('${ require('images/bg.jpg?inline')}')
        }
      `}</style>
      </div>
    </>

  )
}

export default AppCustomized;
