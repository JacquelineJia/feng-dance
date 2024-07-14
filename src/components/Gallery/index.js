import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Gallery.module.scss';

class Gallery extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
          <FormattedMessage
            id="components.gallery.title"
            defaultMessage="Gallery"
          />
        </span>
        <span className={style.videoGroup}>
          <span className={`${style.videoContainer} ${style.singleVideo}`}>
            <iframe
              title="Feng Dance 2024 Recital"
              src="https://www.youtube.com/embed/dsCLRKAVoXc"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
        </span>
        <span className={style.videoGroup}>
          <span className={`${style.videoContainer} ${style.singleVideo}`}>
            <iframe
              title="Feng Dance Recital 2022"
              src="https://www.youtube.com/embed/r0ah9Y77JyU"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
        </span>
        {/*
        <span className={style.videoGroup}>
          <span className={style.videoContainer}>
            <iframe
              title="Dance cover 1"
              src="https://www.youtube.com/embed/Upzn4k2B2PA"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
          <span className={style.videoContainer}>
            <iframe
              title="Dance cover 2"
              src="https://www.youtube.com/embed/VShgl5axPQY"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
          <span className={style.videoContainer}>
            <iframe
              title="Dance cover 3"
              src="https://www.youtube.com/embed/ZpWVSuJS6hI"
              allowfullscreen="allowfullscreen"
            >
            </iframe>
          </span>
        </span>
        */}
      </div>
    );
  }
}

export default Gallery;
