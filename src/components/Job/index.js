import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Job.module.scss';

class Job extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContent appContentWidth`}>
        <span className={`title`}>
          <FormattedMessage
            id="components.job.title"
            defaultMessage="Dance Instructor Wanted – Feng Dance School"
          />
        </span>
        <div className={style.content}>
          <p>
            <FormattedMessage
              id="components.job.intro1"
              defaultMessage="Feng Dance is seeking an energetic, passionate, and experienced Dance Instructor to join our teaching team!"
            />
          </p>
          <p>
            <FormattedMessage
              id="components.job.intro2"
              defaultMessage="We are looking for a dedicated dance teacher who loves working with children and is passionate about helping students grow in skill, confidence, creativity, and a lifelong love of dance."
            />
          </p>
          <p>
            <FormattedMessage
              id="components.job.intro3"
              defaultMessage="This is a paid teaching position, with an immediate start for our new term. The successful candidate will have the opportunity to teach students of different ages and levels in a warm, positive, and supportive environment."
            />
          </p>

          <h3>
            <FormattedMessage
              id="components.job.responsibilities.title"
              defaultMessage="Responsibilities"
            />
          </h3>
          <ul>
            <FormattedMessage
              id="components.job.responsibilities.list"
              defaultMessage="<li>Teach engaging, well-structured dance classes for students of different ages and skill levels</li><li>Demonstrate dance techniques, choreography, and proper form clearly and effectively</li><li>Create a positive and encouraging classroom environment that promotes confidence, creativity, and participation</li><li>Provide constructive feedback and guidance to help students improve their technique and performance</li><li>Prepare lesson plans, music, class materials, and costumes as needed</li><li>Prepare students for RAD ballet examinations</li><li>Choreograph routines for dance competitions and performances</li><li>Support students in developing strong technique, musicality, performance skills, and stage presence</li><li>Maintain a safe and well-organized learning environment</li>"
            />
          </ul>

          <h3>
            <FormattedMessage
              id="components.job.requirements.title"
              defaultMessage="Requirements"
            />
          </h3>
          <ul>
            <FormattedMessage
              id="components.job.requirements.list"
              defaultMessage="<li>Experience teaching ballet, lyrical, and/or jazz; strong ballet teaching skills are particularly valued</li><li>A solid background in dance and knowledge of appropriate techniques for different age groups and levels</li><li>Experience teaching children is highly desirable</li><li>Excellent communication and interpersonal skills</li><li>Ability to demonstrate and explain dance techniques clearly and effectively</li><li>Ability to create engaging lessons that meet the needs of students with different abilities and learning styles</li><li>Good classroom management skills and the ability to lead groups of students</li><li>Experience preparing students for dance competitions and/or performances is an asset</li><li>RAD certification or other recognized dance qualifications are an asset, but not required</li><li>Reliable, responsible, enthusiastic, and committed to providing high-quality dance instruction</li>"
            />
          </ul>

          <h3>
            <FormattedMessage
              id="components.job.why.title"
              defaultMessage="Why Join Feng Dance?"
            />
          </h3>
          <p>
            <FormattedMessage
              id="components.job.why.content"
              defaultMessage="At Feng Dance, we believe that quality training should inspire not only strong technique, but also confidence, creativity, discipline, and a genuine love of dance. Our programs include recreational, pre-competitive, and competitive training, providing opportunities for students to grow at every level."
            />
          </p>
          <p>
            <FormattedMessage
              id="components.job.why.closing"
              defaultMessage="If you are passionate about dance and enjoy inspiring young dancers, we would love to hear from you!"
            />
          </p>

          <p>
            <FormattedMessage
              id="components.job.details"
              defaultMessage="<b>Start Date:</b> September 11, 2026{linebreak}<b>Position:</b> Paid Dance Instructor (minimum $25/h){linebreak}<b>Location:</b> Ottawa, Ontario"
            />
          </p>

          <p>
            <FormattedMessage
              id="components.job.contact"
              defaultMessage="Please contact Feng Dance at {email} to express your interest and provide your resume and/or dance teaching background."
              values={{
                email: (
                  <a href="mailto:fengdancestudio@gmail.com">
                    fengdancestudio@gmail.com
                  </a>
                )
              }}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Job;
