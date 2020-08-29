import React, { useState } from 'react';
import styles from './styles.module.scss';
import { PaperPlaneIcon } from 'icons/PaperPlane';
import { OutboundRoutes } from 'data/routes/OutboundRoutes';
import { LinkedInIcon } from 'icons/LinkedIn';
import { GitHubIcon } from 'icons/Github';
import { EnvelopeIcon } from 'icons/Envelope';
import { BrandColors } from 'data/BrandColors';
import { PageHeader } from 'components/domains/content/PageHeader';
import { LinkIcon } from 'icons/Link';
import { MessageResultStates } from 'models/enums/MessageResultStates';
import { submitFomToAction } from 'utils/form/submitFomToAction';

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
      secondaryText: '/martin-boeje',
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
    },
    {
      name: 'CV',
      secondaryText: 'Download PDF',
      icon: <LinkIcon />,
      link: OutboundRoutes.CV
    }
  ];

export interface ContactProps { }


const Contact = ({ }: ContactProps) => {

  const [emailInput, setEmailInput] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>('');
  const [submissionState, setSubmissionState] = useState<MessageResultStates | undefined>(undefined);

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setSubmissionState(MessageResultStates.working);
      e.preventDefault();

      const form: HTMLFormElement = e.target as HTMLFormElement;

      // Post using Netlify
      submitFomToAction(form)
        .then(r => {
          setSubmissionState(MessageResultStates.success);
          setEmailInput('');
          setMessageInput('');
        })
        .catch(err => {
          console.log('Error submitting form event', err);
          setSubmissionState(MessageResultStates.failed);
        });
    },
    [messageInput, emailInput, submissionState],
  );

  const clearSubmissionMessage = (): void => setSubmissionState(undefined);

  return (
    <>

      <PageHeader pageTitle="Get in touch!" />

      <main className={`${styles.root} content`}>

        {
          submissionState === MessageResultStates.success
            ? <div className="toast mt-3 toast-success"> Thank you for your message! I will get back to you soon! <button className="btn btn-clear" style={{ float: 'right' }} onClick={clearSubmissionMessage} /> </div>
            : submissionState === MessageResultStates.failed
              ? <div className="toast mt-3 toast-error"> Something went wrong... Please try one of the other contact methods <button className="btn btn-clear" style={{ float: 'right' }} onClick={clearSubmissionMessage} /> </div>
              : <>
                <div className="divider-dark hide-lg" />
                <h5 className="text-light mt-5 mb-0" > Send me an email & let's talk! </h5>
              </>
        }

        <div className="mb-5 py-5">
          <form onSubmit={onSubmit} name="mbp-contact" method="POST" data-netlify="true" netlify-honeypot="n-o_b-o-t">
            <div className="form-group">
              <input
                className="form-input"
                required
                type="email"
                id="input-email"
                name="email"
                placeholder="Your@email.com"
                onChange={e => setEmailInput(e.target.value)}
              />
            </div>

            <input type="hidden" name="n-o_b-o-t" />

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
              <button
                type="submit"
                className={`btn btn-block btn-success btn-icon-right btn-lg ${submissionState === MessageResultStates.working ? 'loading' : ''}`}
                disabled={!(emailInput && messageInput && submissionState !== MessageResultStates.working)}
              >
                Send
                <PaperPlaneIcon className="ml-3" />
              </button>
            </div>
          </form>
        </div>

        <div className={`columns justify-center mt-5 ${styles.secondaryContact}`}>
          {secondaryButtons.map(
            ({
              icon,
              link,
              name,
              secondaryText,
              color
            }) => (
                <div key={link} className="mb-5 column col-sm-12 col-md-6 col-3 text-center">
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
      </main>
    </>
  )
}

export default Contact;
