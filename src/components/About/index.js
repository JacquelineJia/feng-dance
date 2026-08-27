import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './About.module.scss';
import styleVideo from '../Gallery/Gallery.module.scss';

class About extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContent appContentWidth`}>
        <span className={`title`}>
          <FormattedMessage
            id="components.about.title"
            defaultMessage="About Feng Dance School"
          />
        </span>
        <span className={style.content}>
          {/* <FormattedMessage
            id="components.about.content.aboutUs"
            defaultMessage="Feng Dance School has more than 30 years of professional dance performance and teaching history in Canada. At present, Feng Dance School offers ballet, jazz, jazz funk, Chinese dance, hip-hop and flexibility training classes, taught by professional dance teachers."
            values={{
              br: <span><br /><br /></span>,
            }}
          /> */}
          <FormattedMessage
            id="components.about.content.aboutUs.intro"
            defaultMessage="Feng Dance School was founded and is personally directed by a professional dance educator with more than 30 years of professional dance performance and teaching experience in Canada. The school is committed to providing professional, systematic, and high-quality dance education for students of different ages and skill levels."
          />
          <span><br /><br /></span>
          <FormattedMessage
            id="components.about.content.aboutUs.program.intro"
            defaultMessage="Feng Dance currently offers the following programs:"
          />
          <ul>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.ballet"
                defaultMessage="Ballet Technique"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.rad"
                defaultMessage="Royal Academy of Dance (RAD) Ballet Examination Program"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.lyrical"
                defaultMessage="Lyrical Dance"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.acro"
                defaultMessage="Acro Dance"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.character"
                defaultMessage="Character Dance"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.kpop"
                defaultMessage="K-pop"
              />
            </li>
            <li>
              <FormattedMessage
                id="components.about.content.aboutUs.program.hiphop"
                defaultMessage="Hip Hop"
              />
            </li>
          </ul>
          <FormattedMessage
            id="components.about.content.aboutUs.program.outro"
            defaultMessage="These are offered through RAD Ballet Examination, Recreational, Pre-Competitive, and Part-time Competitive Programs, designed to meet the diverse learning goals of its students."
          />
          <span><br /><br /><br /></span>
          <FormattedMessage
            id="components.about.content.aboutUs.body"
            defaultMessage=""
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
        <span><br /><br /><br /></span>
        <span className={styleVideo.videoGroup}>
          <span className={`${styleVideo.videoContainer} ${styleVideo.singleVideo}`}>
            <iframe
              title="Feng Dance 2024 Recital"
              src="https://www.youtube.com/embed/dsCLRKAVoXc"
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
