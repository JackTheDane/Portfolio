import styles from './index.module.scss';
import Link from 'next/link';

const About = () => {
  return (
    <div className={`content-page content ${styles.about}`}>
      <div className={styles.profile}>

        <div className="transition-elem delay-0">
          <div className={styles.profileImageWrapper}>
            <img className={styles.profileImage} src="/images/profile.jpg" alt="Martin Bøje Petersen" />
          </div>
        </div>

        <div className={`transition-elem delay-0 ${styles.profileTitleText}`}>
          <h1 className="mb-2 text-primary">
            Martin Bøje Petersen
            </h1>
          <h4 className="text-gray fw-medium">
            Webudvikler & IT Konsulent
            </h4>
        </div>
      </div>

      <div className={styles.content}>

        <div className={`transition-elem delay-1 ${styles.subcontent}`}>
          <h4 className={`${styles.subcontentTitle} text-primary`}>
            Front-end udvikler med kompetencer for backend & design
            </h4>
          <p className="mb-0">
            Mit navn er Martin Bøje Petersen, og jeg har siden 2015 været en del af Web-branchen, bl.a. som studerende, deltidsansat og selvstændig. <br />
            <br />
              Jeg ser det som mit job at skabe det bedste produkt for både brugerne og de andre udviklere på mit hold. Derfor stræber jeg altid for at samarbejde med mit team og kunden for at opnå en harmoni mellem at skabe god brugeroplevelse og skrive let-forståelig kode. <br />
            <br />
              Se nogle af mine projekter <Link href="/projects"><a>her</a></Link>.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About

