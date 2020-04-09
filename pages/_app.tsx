import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';

const AppCustomized = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.app} style={{ backgroundImage: 'url(/images/bg-1920.jpg)' }}>
      <Head>
        <title>
          Martin Bøje Petersen
        </title>
      </Head>
      <Nav />

      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default AppCustomized;
