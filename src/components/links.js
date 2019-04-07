import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from './links.module.css'
import GitHub from "../../assets/icons/github.svg";
import ShrinkMe from "../../assets/icons/shrink-me.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import Mail from "../../assets/icons/mail.svg";

export default () => (
  <div className={styles.links}>

    <OutboundLink href="https://github.com/Safi1012" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
      <GitHub alt="GitHub icon" />
    </OutboundLink>

    <OutboundLink href="https://shrinkme.app" rel="noopener noreferrer" target="_blank" aria-label="Link to my side project named Shrink Me">
      <ShrinkMe alt="Shrink Me icon" />
    </OutboundLink>

    <OutboundLink href="https://www.linkedin.com/in/filipe-santoscorrea" rel="noopener noreferrer" target="_blank" aria-label="Link to my LinkedIn profile">
      <LinkedIn alt="LinkedIn icon" />
    </OutboundLink>
    
    <OutboundLink href="mailto:mail@filipesantoscorrea.com" rel="noopener noreferrer" target="_blank" aria-label="Link to my email address">
      <Mail alt="Mail icon" />
    </OutboundLink>
    
  </div>
)
