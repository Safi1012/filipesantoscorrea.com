import React from 'react'
import styles from './about.module.css'

export default () => (
  <>
    <span>Hi <span role="img" aria-label="hi">👋</span> I am</span>
    <h1 className={styles.headline}>Hamed Esmaili</h1>
    <p className={styles.underline}>
      I'm a <strong>Software</strong> Engineer.<br/>
      I <strong>love</strong> to create new things in hopes of being able to help others.
    </p>
  </>
)
