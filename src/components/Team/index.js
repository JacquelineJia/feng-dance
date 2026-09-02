import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Team.module.scss';

class Team extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContent appContentWidth`}>
        <span className={`title`}>
          <FormattedMessage
            id="components.team.title"
            defaultMessage="Our Team"
          />
        </span>
        <span className={style.ourTeamContent}>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.0.name"
                    defaultMessage="Ping Feng"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.0"
                    defaultMessage="Founder and Director of Feng Dance,{linebreak}Ballet Teacher and Choreographer"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imagePingFeng}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.0.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.director.name"
                    defaultMessage="Tao Ding"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.director"
                    defaultMessage="Director"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageTaoDing}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.director.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.9.name"
                    defaultMessage="Giselle Ashmore"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.9"
                    defaultMessage="Dance Instructor and Choreographer"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageGiselleAshmore}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.9.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.1.name"
                    defaultMessage="Abbie Metcalfe"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.1"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageAbbieMetcalfe}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.1.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.7.name"
                    defaultMessage="Nicole Sun"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.7"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageNicoleSun}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.7.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.2.name"
                    defaultMessage="Wendy Hou"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.2"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageWendyHou}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.2.about"
                defaultMessage=""
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.8.name"
                    defaultMessage="Kateleen Jia"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.team.content.ourTeam.instructor.8"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageKateleenJia}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.team.content.ourTeam.instructor.8.about"
                defaultMessage=""
              />
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Team;
