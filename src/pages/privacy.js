import React from 'react'
import styles from './privacy-legal.module.css'

export default () => (
  <div className={styles.container}>
    <article id="english" lang="en" className={styles.article}>
      <section>
        <h1>Privacy Policy</h1>
        <p>
          Personal data (usually referred to just as "data" below) will only be processed by us to the extent
          necessary and for the purpose of providing a functional and user-friendly website, including its
          contents, and the services offered there.
        </p>

        <p>
          Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter
          referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection,
          recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure
          by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure,
          or destruction performed on personal data, whether by automated means or not.
        </p>

        <p>
          The following privacy policy is intended to inform you in particular about the type, scope, purpose,
          duration, and legal basis for the processing of such data either under our own control or in conjunction
          with others. We also inform you below about the third-party components we use to optimize our website and
          improve the user experience which may result in said third parties also processing data they collect and control.
        </p>

        <p>
          Our privacy policy is structured as follows:
        </p>

        <ol type="I">
          <li><p>Information about us as controllers of your data</p></li>
          <li><p>The rights of users and data subjects</p></li>
          <li><p>Information about the data processing</p></li>
        </ol>


        <section>
          <h2>I. Information about us as controllers of your data</h2>
          <p>The party responsible for this website (the "controller") for purposes of data protection law is:</p>
          <p className={styles.center}>
            Filipe Santos Correa <br/>
            76137 Karlsruhe <br/>
            Germany <br/>
            <a href="mailto:mail@filipesantoscorrea.com">mail@filipesantoscorrea.com</a>
          </p>
        </section>


        <section>
          <h2>II. The rights of users and data subjects</h2>
          <p>
            With regard to the data processing to be described in more detail below, users and data subjects have the right
          </p>
          <ul>
            <li>
              <p>
                to confirmation of whether data concerning them is being processed, information about the data being processed,
                further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further
                processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                to receive copies of the data concerning them and/or provided by them and to have the same transmitted to
                other providers/controllers (cf. also Art. 20 GDPR);
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p>
                to file complaints with the supervisory authority if they believe that data concerning them is being processed
                by the controller in breach of data protection provisions (see also Art. 77 GDPR).
              </p>
            </li>
          </ul>

          <p>
            In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections,
            deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation
            does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a
            right to information about these recipients.
          </p>
          <p>
            Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing
            of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose
            of direct advertising is permissible.
          </p>
        </section>

        <section>
          <h3>III. Information about the data processing</h3>
          <p>
            Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases
            to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise
            stipulated below.
          </p>


          <h4>Google Analytics</h4>
          <p>
            We use Google Analytics on our website. This is a web analytics service provided by Google Inc., 1600 Amphitheatre 
            Parkway, Mountain View, CA 94043 (hereinafter: Google). Through certification according to the EU-US Privacy Shield&nbsp;
            <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" target="_blank" 
              rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
            </a>
          </p>

          <p>
            Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.
            The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. 
            Our legitimate interest lies in the analysis, optimization, and economic operation of our site. Usage and user-related information, 
            such as IP address, place, time, or frequency of your visits to our website will be transmitted to a Google server in the 
            United States and stored there. However, we use Google Analytics with the so-called anonymization function, whereby Google 
            truncates the IP address within the EU or the EEA before it is transmitted to the US. The data collected in this way is in 
            turn used by Google to provide us with an evaluation of visits to our website and what visitors do once there. This data can 
            also be used to provide other services related to the use of our website and of the internet in general. Google states 
            that it will not connect your IP address to other data. In addition, Google provides further information with regard 
            to its data protection practices at&nbsp;<a href="https://www.google.com/intl/de/policies/privacy/partners" target="_blank" 
            rel="noopener noreferrer">https://www.google.com/intl/de/policies/privacy/partners,</a>&nbsp;
            including options you can exercise to prevent such use of your data. 
            In addition, Google offers an opt-out add-on at <a href="https://tools.google.com/dlpage/gaoptout?hl=de" 
            target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=en</a>&nbsp;
            in addition with further information. This add-on can be installed on the most popular browsers and offers you further control over the data that 
            Google collects when you visit our website. The add-on informs Google Analytics' JavaScript (ga.js) that no information about the website 
            visit should be transmitted to Google Analytics. However, this does not prevent information from being transmitted to us or to other 
            web analytics services we may use as detailed herein. You can also opt out by clicking on the next link&nbsp;
            <a href="/privacy" onClick={e => {e.preventDefault(); window.gaOptout(); console.log('Opt Out successfully');}}>Deactivate Google Analytics</a>.
          </p>


          <h4>Google Fonts</h4>
          <p>
            Our website uses Google Fonts to display external fonts. This is a service provided by Google Inc., 1600 Amphitheatre 
            Parkway, Mountain View, CA 94043 (hereinafter: Google). Through certification according to the EU-US Privacy Shield&nbsp;
            <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" target="_blank" 
              rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
            </a>&nbsp;
            Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.
            To enable the display of certain fonts on our website, a connection to the Google server in the USA is established whenever our website is accessed.
            The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and economic operation of our site.
            When you access our site, a connection to Google is established from which Google can identify the site from which your request has
            been sent and to which IP address the fonts are being transmitted for display. Google offers detailed information at&nbsp;
            <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a> and&nbsp;
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>&nbsp;
            in particular on options for preventing the use of data.
          </p>
        </section>

        <p className={styles.final}>
          <a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener noreferrer">Model Data Protection Statement</a> from&nbsp; 
          <a href="https://www.ratgeberrecht.eu/" target="_blank" rel="noopener noreferrer">Anwaltskanzlei Weiß &amp; Partner</a>
        </p>
          
      </section>
    </article>
  </div>
)
