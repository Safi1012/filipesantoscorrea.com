import React from 'react'
import styles from './index.module.css'
import About from '../components/about'
import Links from '../components/links'

export default () => (
  <div className={styles.outerContainer}>
    <div className={styles.container}>
      <About />
      <Links />
    </div>
  </div>
)
