import React from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Banner.module.scss';

const Banner = () => (
  <div className={style.banner}>
    <FormattedMessage
      id="components.banner.message"
      defaultMessage="Enrollment for Fall classes is now open!"
    />
  </div>
);

export default Banner;