import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Team.module.scss';

class Team extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.title}>
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
                    id="components.about.content.ourTeam.instructor.0.name"
                    defaultMessage="Ping Feng"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.0"
                    defaultMessage="Founder and Director of Feng Dance,{linebreak}Ballet Teacher and Choreographer"
                    values={{
                      linebreak: <br />
                    }}
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imagePingFeng}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.0.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.director.name"
                    defaultMessage="Tao Ding"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.director"
                    defaultMessage="Director"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageTaoDing}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.director.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.1.name"
                    defaultMessage="Abbie Metcalfe"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.1"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageAbbieMetcalfe}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.1.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.2.name"
                    defaultMessage="Diana Ding"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.2"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageDianaDing}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.2.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.3.name"
                    defaultMessage="Irene Shen"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.3"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageIreneShen}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.3.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.4.name"
                    defaultMessage="Zenisca Kalugdan"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.4"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.4.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.5.name"
                    defaultMessage="Simon Beckett"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.5"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.5.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.6.name"
                    defaultMessage="Rosie Hoult"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.6"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.6.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.7.name"
                    defaultMessage="Nicole Sun"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.7"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image} ${style.imageNicoleSun}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.7.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
          <span className={style.memberCard}>
            <span className={style.column}>
              <span className={style.column}>
                <span className={style.name}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.8.name"
                    defaultMessage="Kateleen Jia"
                  />
                </span>
                <span className={style.role}>
                  <FormattedMessage
                    id="components.about.content.ourTeam.instructor.8"
                    defaultMessage="Dance Instructor"
                  />
                </span>
              </span>
              <div className={`${style.image}`}/>
            </span>
            <span className={style.description}>
              <FormattedMessage
                id="components.about.content.ourTeam.instructor.8.about"
                defaultMessage=""
                values={{
                  linebreak: <br />
                }}
              />
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default Team;
