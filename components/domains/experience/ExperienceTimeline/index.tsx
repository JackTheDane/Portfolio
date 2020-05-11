import React from 'react';
import { IExperienceItem } from 'models/interfaces/IExperienceItem';
import styles from "./styles.module.scss";


export interface ExperienceTimelineProps {
  items: IExperienceItem[];
}

export const ExperienceTimeline = ({
  items
}: ExperienceTimelineProps) => {
  return (
    <div>
      {
        items.map(({
          company,
          workTitle,
          description,
          endYear,
          startYear,
          logoSrc
        }): JSX.Element => (
            <div className={`${styles.item}`}>

              <div className="d-flex">
                <div className={`pr-3 ${styles.leftContent}`}>
                  <div className={`s-circle`} style={{ width: 60, height: 60, overflow: 'hidden' }}>
                    {
                      logoSrc
                        ? <img src={logoSrc} />
                        : <div className="bg-primary text-light" style={{ width: '100%', height: '100%' }}></div>
                    }

                  </div>
                </div>

                <div>
                  <div><b>{company}</b></div>
                  <div>{workTitle}</div>
                  <small>{startYear} - {endYear}</small>
                  <div>{description}</div>
                </div>
              </div>

            </div>
          ))
      }
    </div>
  )
}
