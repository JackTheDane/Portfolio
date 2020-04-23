import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/domains/navigation/Nav';
import 'swiper/css/swiper.min.css';
import Head from 'next/head';

const AppCustomized = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.app}>
      <div id="_pageBackgroundImage" style={{ backgroundImage: `url('${require('../public/images/bg.jpg?size=800')}')` }} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
