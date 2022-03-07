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

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <p>
            I'm Kurubaran Anandhan, frontend developer and javascript engineer
            with 2+ years of experience in all stages of advanced web
            development using agile methodology. Skilled in designing,
            developing, testing & debugging multiple web-based applications
            incorporating a range of technologies. Able to effectively
            self-manage during independent projects, as well as collaborate in a
            team setting.
          </p>
          <p>
            As a developer, I enjoy bridging the gap between functionality and
            design. My goal is to always build applications that are scalable
            and efficient under the hood while providing engaging, pixel-perfect
            user experiences. In addition, I am highly responsive to client
            needs and also committed to helping people to realize their vision.
          </p>
          <article>
            <h1 className="intro__text">Achievements.</h1>
            <ul className="timeline">
              <li>
                <b>Best Paper Award</b>
                <p>
                  For IoT based air pollution monitoring system, presented on
                  ICFM - 2018, to detect the presence of carbon dioxide, carbon
                  monoxide, ammonia, benzene, smoke and other harmful gases in
                  the surroundings.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Best Paper Award - IoT Based Air Pollution Monitoring System"
                  href="https://firebasestorage.googleapis.com/v0/b/kurubaran-anandhan.appspot.com/o/bestpaperaward.png?alt=media&token=40441956-b6ca-4d3d-b8ec-b741fd992bec"
                >
                  View Certificate
                </a>
              </li>
              <li>
                <b>Man of the Match</b>
                <p>
                  At INDO-NEPAL T20 Cricket Championship - 2017 held at Pokhara,
                  Nepal.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Man of the Match - Indo Nepal T20 Cricket Championship"
                  href="https://firebasestorage.googleapis.com/v0/b/kurubaran-anandhan.appspot.com/o/manofthematch.png?alt=media&token=478b649f-9804-472f-b1e2-a52fc86ada55"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/experience" className="mt-3 mb-5">
          Lets Continue To Experience
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

export default About;
