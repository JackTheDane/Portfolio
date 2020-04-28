import React, { useState } from 'react';
import styles from './styles.module.scss';
import Head from 'next/head';
import { PaperPlaneIcon } from 'icons/PaperPlane';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { LinkedInIcon } from 'icons/LinkedIn';
import { GitHubIcon } from 'icons/Github';
import { EnvelopeIcon } from 'icons/Envelope';
import { BrandColors } from 'data/BrandColors';
// import { GradiantBackground } from '../../components/reusables/GradiantBackground';

const secondaryButtons: {
  name: string;
  secondaryText: string;
  link: string;
  icon: JSX.Element;
  color?: string;
}[] = [
    {
      name: 'Email',
      secondaryText: 'martin@mbpmedia.com',
      icon: <EnvelopeIcon />,
      link: OutboundRoutes.emailAddress
    },
    {
      name: 'LinkedIn',
      secondaryText: '/martin-bøje-petersen-74459173',
      icon: <LinkedInIcon />,
      link: OutboundRoutes.linkedIn,
      color: BrandColors.LinkedIn
    },
    {
      name: 'GitHub',
      secondaryText: '/JackTheDane',
      icon: <GitHubIcon />,
      link: OutboundRoutes.gitHub,
      color: BrandColors.GitHub
    }
  ]



export interface ContactProps { }


const Contact = ({ }: ContactProps) => {

  const [emailInput, setEmailInput] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>('');

  return (
    <>
      <Head>
        <title>Contact - Martin Bøje Petersen</title>
      </Head>

      <div className={`${styles.root} content`}>

        <div className="content-page-header">
          <h1 className={`text-light ${styles.title}`}>
            Get in touch with me
            {/* <span /> */}
          </h1>
          <div className="divider" />
        </div>

        <div className="mb-5 py-5">
          <form method="POST" action="https://formspree.io/martin@mbpmedia.com">
            <div className="form-group">
              <input
                className="form-input"
                required
                type="email"
                id="input-email"
                name="email"
                placeholder="Your@Email.com"
                onChange={e => setEmailInput(e.target.value)}
              />
            </div>


            <div className="form-group my-3">
              <textarea
                className="form-input"
                required
                id="input-msg"
                name="message"
                rows={8}
                placeholder="Dear Martin..."
                onChange={e => setMessageInput(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block btn-success btn-icon-right btn-lg" disabled={!(emailInput && messageInput)}>
                Send
                <PaperPlaneIcon className="ml-3" />
              </button>
            </div>
          </form>
        </div>

        <div className={`columns mt-5 ${styles.secondaryContact}`}>
          {secondaryButtons.map(
            ({
              icon,
              link,
              name,
              secondaryText,
              color
            }) => (
                <div className="mb-5 column col-sm-12 col-md-6 col-4 text-center">
                  <a
                    href={link}
                    className="text-light d-flex"
                    style={{ alignItems: 'center', flexDirection: 'column' }}
                    target='_blank'
                    rel='noopener'
                    draggable={false}
                  >
                    <button className="btn btn-action btn-primary btn-lg mb-2" style={{ backgroundColor: color }}>
                      {icon}
                    </button>
                    <h4 className="mb-2">
                      {name}
                    </h4>
                  </a>
                  <h6 className="text-gray">
                    {secondaryText}
                  </h6>
                </div>
              )
          )}
        </div>
      </div>
    </>
  )
}

export default Contact;
