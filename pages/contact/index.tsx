import React, { useState } from 'react';
import styles from './styles.module.scss';
import Head from 'next/head';
import { PaperPlaneIcon } from '../../components/domains/icons/PaperPlane';
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

        <h1 className=" text-primary">
          Get in touch with me
        </h1>

        <div className="divider "></div>

        <div className="my-5 ">
          <form method="POST" action="https://formspree.io/martin@mbpmedia.com">
            <div className="form-group columns">
              <div className="column col-6 col-xs-12">
                <label className="form-label" htmlFor="input-email">Email</label>
                <input
                  className="form-input"
                  required
                  type="email"
                  id="input-email"
                  name="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="column col-6 col-xs-12">
                <label className="form-label" htmlFor="input-name">Name (Optional)</label>
                <input
                  className="form-input"
                  type="text"
                  id="input-name"
                  name="name"
                // placeholder="Your name (Optional)"
                />
              </div>

            </div>


            <div className="form-group">
              <label className="form-label" htmlFor="input-besked">Message body</label>
              <textarea
                className="form-input"
                required
                id="input-msg"
                name="message"
                rows={5}
                placeholder="Write your message here"
              />
            </div>

            <div className="form-group">
              <button type="submit" className={`btn btn-primary btn-icon-right my-2 mr-3 btn-lg}`}>
                Send
                <PaperPlaneIcon className="ml-3" />
              </button>
              <small>
                Sent via FormSpree.io
              </small>
            </div>
          </form>

        </div>

        <div className="divider  my-5"></div>

        <div>
          <div className={` ${styles.subcontent}`}>
            <h3 className='text-primary'>
              Email
            </h3>
            <a href="mailto:martin@mbpmedia.com">
              Martin@mbpmedia.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
