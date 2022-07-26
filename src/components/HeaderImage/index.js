import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from "react-router-dom";

import style from './HeaderImage.module.scss';

class HeaderImage extends React.Component {
  render() {
    return (
      <div className={style.pageImage} />
    );
  }
}

export default withRouter(HeaderImage);
