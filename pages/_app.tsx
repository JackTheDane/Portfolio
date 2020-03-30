import '../styling/global.scss';
import styles from './_app.module.scss';
import { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import 'swiper/css/swiper.min.css';

const AppCustomized = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.app} style={{ backgroundImage: 'url(/images/bg-1920.jpg)' }}>
      {/* <div className={styles['app__sidebar']}> */}

      <Nav />

      {/* </div> */}

      <div className={styles['app__content']}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default AppCustomized;
