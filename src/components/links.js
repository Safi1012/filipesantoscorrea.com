import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from './links.module.css'
import Twitter from "../../assets/icons/twitter.svg";
import GitHub from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Medium from "../../assets/icons/medium.svg";
import Codepen from "../../assets/icons/codepen.svg";

export default () => (
  <>
    <div className={styles.links}>
      <OutboundLink href="https://twitter.com/theham3d" rel="noopener noreferrer" target="_blank" aria-label="Link to my Twitter profile">
        <Twitter alt="Twitter icon" />
      </OutboundLink>
      <OutboundLink href="https://github.com/theham3d" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
        <GitHub alt="GitHub icon" />
      </OutboundLink>
      <OutboundLink href="https://www.linkedin.com/in/theham3d" rel="noopener noreferrer" target="_blank" aria-label="Link to my LinkedIn profile">
        <LinkedIn alt="LinkedIn icon" />
      </OutboundLink>
      <OutboundLink href="https://www.instagram.com/theham3d/" rel="noopener noreferrer" target="_blank" aria-label="Link to my Instagram profile">
        <Instagram alt="Instagram icon" />
      </OutboundLink>
      <OutboundLink href="https://medium.com/@theham3d" rel="noopener noreferrer" target="_blank" aria-label="Link to my Medium profile">
        <Medium alt="Medium icon" />
      </OutboundLink>
      <OutboundLink href="https://codepen.io/theham3d" rel="noopener noreferrer" target="_blank" aria-label="Link to my Codepen profile">
        <Codepen alt="Codepen icon" />
      </OutboundLink>
    </div>
    <span className={styles.email}>{`{ theham3d@gmail.com }`}</span>
  </>
)
