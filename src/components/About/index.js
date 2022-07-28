import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './About.module.scss';
import styleVideo from '../Gallery/Gallery.module.scss';

class About extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.about.title"
            defaultMessage="About us"
          />
        </span>
        <span className={style.content}>
          <FormattedMessage
            id="components.about.content.aboutUs"
            defaultMessage="Feng Dance School has more than 30 years of professional dance performance and teaching history in Canada. At present, Feng Dance School offers ballet, jazz, jazz funk, Chinese dance, hip-hop and flexibility training classes, taught by professional dance teachers."
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
        <span><br /><br /></span>
        <span className={styleVideo.videoGroup}>
          <span className={`${styleVideo.videoContainer} ${styleVideo.singleVideo}`}>
            <iframe
              title="Feng Dance Recital 2022"
              src="https://www.youtube.com/embed/r0ah9Y77JyU"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
        </span>
      </div>
    );
  }
}

export default About;
