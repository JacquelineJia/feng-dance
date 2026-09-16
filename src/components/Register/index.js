import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Register.module.scss';

const GOOGLE_FORM_LINK_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeWwY3Enwd4opobpQEG1DwwW36bzJTEkcVJEPVAjDtfxfPxRw/viewform';
const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_LINK_URL}${GOOGLE_FORM_LINK_URL.includes('?') ? '&' : '?'}embedded=true`;

class Register extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContent appContentWidth`}>
        <span className={`title`}>
          <FormattedMessage
            id="components.register.title"
            defaultMessage="Register"
          />
        </span>

        <span className={style.content}>
          <FormattedMessage
            id="components.register.content"
            defaultMessage="Fill out the form below to reserve your spot."
          />
        </span>

        <span className={style.fallbackLink}>
          <FormattedMessage
            id="components.register.fallback"
            defaultMessage="Trouble viewing the form?"
          />
          {' '}
          <a href={GOOGLE_FORM_LINK_URL} target="_blank" rel="noopener noreferrer">
            <FormattedMessage
              id="components.register.fallbackLinkText"
              defaultMessage="Open it in a new tab"
            />
          </a>
        </span>

        <div className={style.formWrapper}>
          <iframe
            className={style.formEmbed}
            src={GOOGLE_FORM_EMBED_URL}
            title="Registration form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            <FormattedMessage
              id="components.register.loading"
              defaultMessage="Loading…"
            />
          </iframe>
        </div>
      </div>
    );
  }
}

export default Register;
