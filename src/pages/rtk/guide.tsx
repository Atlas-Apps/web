import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import Img, { FluidObject } from 'gatsby-image';
import { Footer } from '../../components/Footer';
import SiteNav from '../../components/header/SiteNav';
import { PostFullContent } from '../../components/PostContent';
import { Wrapper } from '../../components/Wrapper';
import IndexLayout from '../../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../../templates/post';
import { colors } from '../../styles/colors';
import { FaProductHunt} from 'react-icons/fa';
import { IconContext } from "react-icons";

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

export interface InstructionsProps {
  data: {
    logo: {
      childImageSharp: {
        fluid: FluidObject;
      };
    }
  }
}

const Instructions: React.FC<InstructionsProps> = props => {
  return (
    <IndexLayout>
      <Helmet>
        <title>Instructions</title>
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
                <PostFullTitle className="post-full-title">RTK Guide</PostFullTitle>
                <Img
                  alt={`kid shooting Nerf gun`}
                  style={{ height: '100%' }}
                  fluid={ props.data.logo.childImageSharp.fluid }
                />
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <IconContext.Provider value={{ color: "white" }}>
                    <div className="post-content">
                        <p>Thanks for checking out Reason to Kill. Gather up your friends and get ready to have hours of fun. RTK is best played with toy dart guns, like Nerf blasters. Don't have enough? That's ok, you can start by playing with swords, throwable objects like balls, or simply play like tag.</p>
                        <p>Ready to play? Let's jump right in.</p>
                        <h2>Roles</h2>
                        <p>An RTK round begins by assigning each player a role. Roles marked <FaProductHunt/> are exclusive to RTK Pro.</p>
                        
                        {/* Killer */}
                        <h3>The Killer ☠️</h3>
                        <p>The Killer's main job is to kill the other players in the game.  Put on your best Poker face because you likely don't want the others to know it is you. Be sneaky. Each player killed, earns the Killer +1 point. If the non-killers figure kill the Killer before the end of the round, they each earn +1 point (even if they are dead).</p>
                        <p>The Killer should also focus on staying alive at the end of the round for a +3 point bonus.</p>
                        
                        {/* Civilian */}
                        <h3>Civilian 🧍‍♂️</h3>
                        <p>The Civilian's job is to kill the Killer. If successful, the civilian is awarded +3 points. Civilians who participate in a round where the Killer is killed (but they didn't kill the Killer themselves) are awarded +1 point.</p>

                        {/* Body Guard */}
                        <h3>Body Guard 👮‍♂️</h3>
                        <p>The Body Guard inherits the characteristics of a Civilian, but are also charged with protecting a single player that will be revealed at the beginning of the round. Successfully protecting your individual will result in +3 points.</p>
                        <p>The Body Guard can be tasked with protecting the Killer. If that is the case, they will not receive the +3 bonus for killing the Killer.</p>

                        {/* Bounty Hunter */}
                        <h3>Bounty Hunter 😈</h3>
                        <p>The Bounty Hunter inherits the characteristics of a Civilian. Additionally, they are given a single player to kill. Successfully hitting your bounty will result in +3 points.</p>

                        {/* Jester */}
                        <h3><FaProductHunt/> Jester 🤹</h3>
                        <p>The Jester's goal is to be killed before the end of the round for +3 points. This bonus is not applied if they are killed by the Killer however.</p>

                        {/* Bomber */}
                        <h3><FaProductHunt/> Bomber 💣</h3>
                        <p>This role requires an extra object. This can be a box, a ball, a book, or really anything that can be easily picked up and moved by players. If the bomber is in possession of this object by the end of the round, they are awarded +10 points. Other players may also pick-up/hide the object. Before each round, place the object back in a central location.</p>

                        {/* Medic */}
                        <h3><FaProductHunt/> Medic 👩‍⚕️</h3>
                        <p>The Medic is just like any other Civilian but are give the option to heal one player from the dead, once, during the round.</p>
                
                        <h2>Starting a Round</h2>
                        <p>After all players have been assigned their role and confirm, the countdown will begin. If possible, quickly turn off the lights. You have 10 seconds to hide.</p>
                        <p>Pro-Tip: With RTK Plus, you can connect your smart home lights through HomeKit to automatically manage the lights throughout the rounds.</p>
                    </div>
                </IconContext.Provider>
                
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
  query instructionsPageQuery {
    logo: file(relativePath: { eq: "img/nerf-gun-shot.jpg" }) {
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

export default Instructions;
