import React from 'react';
import Particles from 'react-particles-js';
import styles from './index.module.css';
import About from '../components/about';
import Links from '../components/links';
import Footer from '../components/footer';
import particleOptions from '../../assets/particles.json';

export default () => (
  <>
    <Particles className={styles.particles} params={particleOptions} />
    <div className={styles.outerContainer}>
      
      <div className={styles.container}>
        <About />
        <Links />
      </div>
    </div>
    <Footer />
  </>
)
