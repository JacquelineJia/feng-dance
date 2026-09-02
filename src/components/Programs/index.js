import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Programs.module.scss';

class Programs extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContent appContentWidth`}>
        <span className={`title`}>
          <FormattedMessage
            id="components.programs.title"
            defaultMessage="Programs"
          />
        </span>
        <span className={style.content}>
          <FormattedMessage
            id="components.programs.content"
            defaultMessage=""
          />
        </span>
      </div>
    );
  }
}

export default Programs;
