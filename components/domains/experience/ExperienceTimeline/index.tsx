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
                  <div className={`s-circle`} style={{ width: 50, height: 50, overflow: 'hidden' }}>
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

                <div className={styles.rightContent}>
                    <div  style={{ lineHeight: 1 }}><b>{workTitle}</b></div>
                    <div className="my-1" style={{ lineHeight: 1, fontSize: '.8rem' }}>{company}</div>
                    <div>
                      <small className={`label label-secondary ${styles.time}`}>{startYear}<span className="mx-1">&#8594;</span>{endYear}</small>
                    </div>
                  <p className="mt-2">{description}</p>
                </div>
              </div>

            </div>
          ))
      }
    </div>
  )
}
