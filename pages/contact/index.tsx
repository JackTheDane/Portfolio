import React, { useState } from 'react';
import styles from './styles.module.scss';
import Head from 'next/head';
import { PaperPlaneIcon } from '../../components/domains/icons/PaperPlane';
import { OutboundRoutes } from '../../data/routes/OutboundRoutes';
import { LinkedInIcon } from '../../components/domains/icons/LinkedIn';
import { GitHubIcon } from '../../components/domains/icons/GitHub';
import { EnvelopeIcon } from '../../components/domains/icons/Envelope';
// import { useForm } from 'react-hook-form';


export interface ContactProps { }


const Contact = ({ }: ContactProps) => {

  // const { register, handleSubmit } = useForm();
  // const [sending, setSending] = useState(false);

  // const sendEmail

  return (
    <>
      <Head>
        <title>Contact - Martin Bøje Petersen</title>
      </Head>

      <div className="content-page content">

        <h1 className={`text-light ${styles.title}`}>
          Get in touch with me ...
          {/* Dear Martin...
          <span /> */}
        </h1>

        {/* <div className="divider " /> */}

        <div className="columns">
          <div className="my-5 column py-5 col-8 col-md-12">
            <h3 className="text-light mb-5">... With a message</h3>
            <form method="POST" action="https://formspree.io/martin@mbpmedia.com">
              <div className="form-group">
                {/* <label className="form-label text-light" htmlFor="input-email">Your email</label> */}
                <input
                  className="form-input text-light"
                  required
                  type="email"
                  id="input-email"
                  name="email"
                  placeholder="Your@Email.com"
                />
              </div>


              <div className="form-group my-3">
                {/* <label className="form-label text-light" htmlFor="input-besked">Write you message below</label> */}
                <textarea
                  className="form-input"
                  required
                  id="input-msg"
                  name="message"
                  rows={8}
                  placeholder="Dear Martin..."
                />
              </div>

              <div className="form-group">
                <button type="submit" className={`btn btn-block btn-primary btn-icon-right btn-lg}`}>
                  Send
                  <PaperPlaneIcon className="ml-3" />
                </button>
              </div>
            </form>

          </div>

          <div className="divider col-12 show-md my-5" />
          <div className="divider-vert col-1 hide-md my-5" />

          <div className="column col-3 col-md-12 py-5 my-5">
            <h3 className='text-light'>
              ... Or
            </h3>

            <ul className="menu text-primary">
              <li className="menu-item">
                <a href={OutboundRoutes.emailAddress}>
                  <span className="btn btn-action mr-3 btn-primary">
                    <EnvelopeIcon />
                  </span>
                  Email
                </a>
              </li>

              {/* <li className="divider" /> */}

              <li className="menu-item">
                <a href={OutboundRoutes.linkedIn}>
                  <span className="btn btn-action mr-3 btn-primary">
                    <LinkedInIcon />
                  </span>
                  LinkedIn
                </a>
              </li>

              <li className="divider text-center" data-content="Also check out" />

              <li className="menu-item">
                <a href={OutboundRoutes.linkedIn}>
                  <span className="btn btn-action mr-3 btn-primary">
                    <GitHubIcon />
                  </span>
                  GitHub
                </a>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact;
