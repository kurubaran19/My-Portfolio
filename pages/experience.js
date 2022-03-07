/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const Experience = () => {
  return (
    <Layout title="Experience">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my work experience section"
        >
          <h1 className="intro__text">Experience.</h1>
          <article>
            <ul className="timeline">
              <li>
                <p>
                  <b>Software Developer</b>
                  &nbsp;&nbsp;@&nbsp;&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="Cavintek Software Pvt. Ltd"
                    href="https://cavintek.com/"
                  >
                    Cavintek Software
                  </a>
                  &nbsp;&nbsp;
                  <em>
                    <b>(Aug 2021 - Dec 2021)</b>
                  </em>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="SkillRobo - Online Assessment Tool"
                    href="https://www.skillrobo.com/"
                  >
                    SkillRobo
                  </a>
                  &nbsp;&nbsp; - Online Pre Employment Assessment Tool
                </p>
                <p>
                  -&nbsp;&nbsp;Integrated our software with Zoho Bigin to manage
                  clients.
                </p>
                <p>
                  -&nbsp;&nbsp;Worked on designing and developing admin test
                  library to create tests.
                </p>
                <p>
                  -&nbsp;&nbsp;Worked on designing and developing client test
                  library to import tests.
                </p>
                <p>
                  -&nbsp;&nbsp;Worked on migrating react hook forms from version
                  6 to 7.
                </p>
                <p>
                  -&nbsp;&nbsp;Refactored Dashboard with Top Candidates
                  information across all tests, Most Active Tests, Overall Test
                  & Candidate Analysis.
                </p>
              </li>
              <li>
                <p>
                  <b>Junior Software Developer</b>
                  &nbsp;&nbsp;@&nbsp;&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="BigFday"
                    href="http://www.bigfday.com/"
                  >
                    BigFday
                  </a>
                  &nbsp;&nbsp;
                  <em>
                    <b>(June 2019 - August 2019)</b>
                  </em>
                </p>
                <p>
                  -&nbsp;&nbsp;Developed web-based internal management system
                  which supports sales department.
                </p>
                <p>
                  -&nbsp;&nbsp;Worked on slack notification to notify sales
                  department regarding new signups.
                </p>
                <p>
                  -&nbsp;&nbsp;Followed agile and scrum methodology
                  communication and collaboration, functioning software.
                </p>
              </li>
              <li>
                <p>
                  <b>Junior Software Developer Internship</b>
                  &nbsp;&nbsp;@&nbsp;&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="Jenesys Technologies"
                    href="https://www.jenesystech.com/"
                  >
                    Jenesys Technologies
                  </a>
                  &nbsp;&nbsp;
                  <em>
                    <b>(January 2019 - April 2019)</b>
                  </em>
                </p>
                <p>
                  -&nbsp;&nbsp;Ui design using angular for existing web
                  application.
                </p>
                <p>
                  -&nbsp;&nbsp;Managing geoserver and geospatial data using gis
                  (geographic information system) tools.
                </p>
                <p>
                  -&nbsp;&nbsp;Customizing maps and its layers using openlayers.
                </p>
              </li>
              <li>
                <p>
                  <b>Android Developer Internship</b>
                  &nbsp;&nbsp;@&nbsp;&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="Mocero Health Solutions"
                    href="https://mocerohealth.com/"
                  >
                    Mocero Health Solutions
                  </a>
                  &nbsp;&nbsp;
                  <em>
                    <b>(August 2018 - December 2018)</b>
                  </em>
                </p>
                <p>
                  -&nbsp;&nbsp;Designed login page and used google fit api to
                  track your workouts from your phone.
                </p>
                <p>
                  -&nbsp;&nbsp;Created an activity with periodical calendar to
                  book appointments with doctors.
                </p>
              </li>
            </ul>
          </article>
          <h3>My Learning's on Udemy.</h3>
          <article>
            <ul className="timeline">
              <li>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="MongoDB - The Complete Developer's Guide 2021"
                    href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/"
                  >
                    MongoDB - The Complete Developer's Guide 2021
                  </a>
                </p>
                <p>
                  Master MongoDB Development for Web & Mobile Apps. CRUD
                  Operations, Indexes, Aggregation Framework - All about
                  MongoDB!
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="MongoDB - The Complete Developer's Guide 2021 Certificate"
                  href="https://firebasestorage.googleapis.com/v0/b/kurubaran-anandhan.appspot.com/o/mongodb-course-completion-certificate.jpeg?alt=media&token=d9510839-16af-4ed8-961a-830670e68d6f"
                >
                  View Certificate
                </a>
              </li>
              <li>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cardHover"
                    aria-label="React js. From the Beginning"
                    href="https://www.udemy.com/course/react-js-from-the-beginning-w-redux-and-react-router/"
                  >
                    React js. From the Beginning
                  </a>
                </p>
                <p>
                  Master MongoDB Development for Web & Mobile Apps. CRUD
                  Operations, Indexes, Aggregation Framework - All about
                  MongoDB!
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="React js. From the Beginning Certificate"
                  href="https://firebasestorage.googleapis.com/v0/b/kurubaran-anandhan.appspot.com/o/reactjs-course-completion-certificate.jpeg?alt=media&token=397c973c-9890-453f-b626-7a7f18fb30fa"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default Experience;
