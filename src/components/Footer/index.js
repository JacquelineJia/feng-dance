import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <div className={`${style.footer} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.footer.title.contactUs"
              defaultMessage="Contact Us"
            />
          </span>
          <span>
            <a className={style.link} 
              href="mailto:fengdancestudio@gmail.com"
              target="_blank">
              fengdancestudio@gmail.com
            </a>
          </span>
          <span>
            (613) 864-6588
          </span>
          <div className={style.divider} />
          <div className={style.lastLine}>
            <div className={style.icons}>
              <a class="bi bi-youtube"
                href="https://www.youtube.com/@OttawaFengDance">
              </a>
              <a class="bi bi-instagram"
                href="https://www.instagram.com/feng_dance">
              </a>
            </div>
            <span className={style.copyright}>
              <FormattedMessage
                id="components.footer.copyright"
                defaultMessage="© 2023 Feng Dance School"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
