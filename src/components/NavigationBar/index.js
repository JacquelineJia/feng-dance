import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from "react-router-dom";

import style from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  isOpen = path => this.props.location.pathname === path;

  render() {
    return (
      <div className={`${style.navBar} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <div className={style.header}>
            <div className={style.name}>
              <span className={this.props.linkIndex === 1 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(1)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.title"
                    defaultMessage="Feng Dance School"
                  />
                </a>
              </span>
            </div>
            <div className={style.menu}>
              <span className={this.props.linkIndex === 2 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(2)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.programs"
                    defaultMessage="Programs"
                  />
                </a>
              </span>
              <span className={this.props.linkIndex === 3 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(3)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.team"
                    defaultMessage="Our Team"
                  />
                </a>
              </span>
              <span className={this.props.linkIndex === 4 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(4)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.gallery"
                    defaultMessage="Gallery"
                  />
                </a>
              </span>
            </div>
          </div>
          <button
              className={style.languageButton}
              onClick={() => this.props.onChangeLanguage()}
            >
              <FormattedMessage
                id="languageChange"
                defaultMessage="English/中文"
              />
            </button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
