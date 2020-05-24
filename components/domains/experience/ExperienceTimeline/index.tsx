import React from 'react';
import { IExperienceItem } from 'models/interfaces/IExperienceItem';
import styles from "./styles.module.scss";
import { BriefcaseIcon } from 'icons/Briefcase';


export interface ExperienceTimelineProps {
  items: IExperienceItem[];
  /** This icon will be used if no icon was passed
   * @default BriefcaseIcon
   */
  fallbackIcon?: JSX.Element;
}

export const ExperienceTimeline = ({
  items,
  fallbackIcon
}: ExperienceTimelineProps) => {
  return (
    <div className="text-light">
      {
        items.map(({
          company,
          workTitle,
          description,
          endYear,
          startYear,
          logoSrc
        }): JSX.Element => (
            <div key={`${company}-${workTitle}`} className={`${styles.item}`}>

              <div className="d-flex">
                <div className={`pr-3 ${styles.leftContent}`}>
                  <div className={`s-circle`} style={{ width: 60, height: 60, overflow: 'hidden' }}>
                    {
                      logoSrc
                        ? <img src={logoSrc} />
                        : (
                          <div
                            className={styles.fallbackIcon}
                            children={fallbackIcon || <BriefcaseIcon style={{ transform: 'translateY(-10%)' }} />}
                          />
                        )
                    }

                  </div>
                </div>

                <div className="pb-5">
                  <div><b>{workTitle}</b></div>
                  <div style={{ lineHeight: 1, fontSize: '.8rem' }}>{company}</div>
                  <small className="mt-1" style={{ lineHeight: 1, opacity: .6 }}><b>{startYear}</b> - <b>{endYear}</b></small>
                  <p className="mt-2">{description}</p>
                </div>
              </div>

            </div>
          ))
      }
    </div>
  )
}
