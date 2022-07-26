import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        {/* <span className={style.title}>
           <FormattedMessage
             id="components.home.title.aboutUs"
             defaultMessage="About us"
           />
         </span>*/ }
        <span className={style.content}>
          <FormattedMessage
            id="components.home.content.aboutUs"
            defaultMessage="Feng Dance School has more than 30 years of professional dance performance and teaching history in Canada. At present, Feng Dance School offers ballet, jazz, jazz funk, Chinese dance, hip-hop and flexibility training classes, taught by professional dance teachers."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
      </div>
    );
  }
}

export default Home;
