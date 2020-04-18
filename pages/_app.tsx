import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';

const AppCustomized = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.app}>
      <div id="_pageBackgroundImage" />
      <Head>
        <title>
          Martin Bøje Petersen
        </title>
      </Head>
      <Nav />

      <main className={styles.content} id="_mainContent">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default AppCustomized;
