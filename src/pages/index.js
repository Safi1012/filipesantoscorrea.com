import React from 'react';
import Particles from 'react-particles-js';
import { Helmet } from 'react-helmet';
import styles from './index.module.css';
import About from '../components/about';
import Links from '../components/links';
import Footer from '../components/footer';
import particleOptions from '../../assets/particles.json';

export default () => (
  <> 
    <Helmet htmlAttributes={{ lang : 'en' }}>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <title>Filipe Santos Correa - Front-End Engineer</title>
      <meta name="title" content="Filipe Santos Correa - Front-End Engineer" />
      <meta name="description" content="Hi, my name is Filipe Santos Correa. I'm a Front-End Engineer from Karlsruhe - Germany." />
      <link rel="canonical" href="https://filipesantoscorrea.com" />
    </Helmet>

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
