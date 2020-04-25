import React, { useState } from 'react';
import styles from './styles.module.scss';
import Head from 'next/head';
import { PaperPlaneIcon } from '../../components/domains/icons/PaperPlane';
import { OutboundRoutes } from '../../data/routes/OutboundRoutes';
import { LinkedInIcon } from '../../components/domains/icons/LinkedIn';
import { GitHubIcon } from '../../components/domains/icons/Github';
import { EnvelopeIcon } from '../../components/domains/icons/Envelope';
import { GradiantBackground } from '../../components/reusables/GradiantBackground';
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

      <div className="content-page bg-primary">

        <h1 className={`text-light content ${styles.title}`}>
          Get in touch with me ...
          {/* <span /> */}
        </h1>

        {/* <div className="divider " /> */}

        <GradiantBackground className="content py-5" type="light">
          <div className="columns">
            <div className="mb-5 column py-5 col-8 col-md-12">
              <h3 className="text-primary mb-5">... With a message</h3>
              <form method="POST" action="https://formspree.io/martin@mbpmedia.com">
                <div className="form-group">
                  {/* <label className="form-label text-primary" htmlFor="input-email">Your email</label> */}
                  <input
                    className="form-input"
                    required
                    type="email"
                    id="input-email"
                    name="email"
                    placeholder="Your@Email.com"
                  />
                </div>


                <div className="form-group my-3">
                  {/* <label className="form-label text-primary" htmlFor="input-besked">Write you message below</label> */}
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
                  <button type="submit" className={`btn btn-block btn-success btn-icon-right btn-lg}`}>
                    Send
                  <PaperPlaneIcon className="ml-3" />
                  </button>
                </div>
              </form>

            </div>

            {/* <div className="divider col-12 show-md my-5" />
            <div className="divider-vert col-1 hide-md my-5" /> */}
            <div className="col-1 col-md-12" />

            <div className="column col-3 col-md-12 py-5 mb-5">
              <h3 className='text-primary'>
                ... Or
              </h3>

              <div>

                <a href={OutboundRoutes.emailAddress} className="btn mb-2 btn-block btn-lg text-left btn-primary">
                  <EnvelopeIcon className="mr-3" />
                  Email
                </a>
                <a href={OutboundRoutes.linkedIn} className="btn btn-block btn-lg text-left btn-primary">
                  <LinkedInIcon className="mr-3" />
                  LinkedIn
                </a>

                <div className="divider text-center my-5" data-content="Also check out" />

                <a href={OutboundRoutes.gitHub} className="btn btn-block btn-lg text-left btn-primary">
                  <GitHubIcon className="mr-3" />
                    GitHub
                </a>

              </div>
            </div>

          </div>
        </GradiantBackground>

      </div>
    </>
  )
}

export default Contact;
