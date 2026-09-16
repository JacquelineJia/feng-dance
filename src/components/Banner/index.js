import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import style from './Banner.module.scss';

const Banner = () => (
  <Link to="/register" className={style.banner}>
    <FormattedMessage
      id="components.banner.message"
      defaultMessage="Enrollment for Fall classes is now open!"
    />
  </Link>
);

export default Banner;