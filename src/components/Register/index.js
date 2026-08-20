import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Register.module.scss';

class Register extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.register.title"
            defaultMessage="Register"
          />
        </span>
        <span className={style.content}>
          <FormattedMessage
            id="components.register.content"
            defaultMessage="Registration form will be added soon."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
      </div>
    );
  }
}

export default Register;
