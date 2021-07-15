import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import Img, { FluidObject } from 'gatsby-image';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

export interface AboutProps {
  data: {
    logo: {
      childImageSharp: {
        fluid: FluidObject;
      };
    }
  }
}

const About: React.FC<AboutProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">About</PostFullTitle>
                <Img
                  alt={`group photo with Austin and others`}
                  style={{ height: '100%' }}
                  fluid={ props.data.logo.childImageSharp.fluid }
                />
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                
                <div className="post-content">
                  <p>
                    I started Atlas Apps in late summer 2021. I had a couple ideas for some new
                    apps that I was really excited for. Most notibly, I was really excited about
                    releasing Speed Blackjack on the App Store. Online gambling and sports betting
                    had just been leagalized in Michigan earlier in the year. I wasn't happy with
                    the existing Blackjack learning and practice apps, so I decided to create my own.
                    I was excited to publish to the App Store under my name and quickly hit a block.
                    Apple restricts simulated gambling app from being released by individual 
                    developers--hence the founding of Atlas Apps.
                  </p>
                  <p>
                    As of writing this, I'm unsure how this will go. I'm relatively new to the
                    indie/entrepreneurship game, but at the very least, I'm hoping to learn a thing
                    or two. I hope you enjoy our apps. Please let me know if you have ideas for improvement.
                  </p>
                  <p>
                    Austin Evans
                    <br/>
                    Founder
                  </p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  )
}

export const pageQuery = graphql`
  query aboutPageQuery {
    logo: file(relativePath: { eq: "img/group-pic.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 3720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
