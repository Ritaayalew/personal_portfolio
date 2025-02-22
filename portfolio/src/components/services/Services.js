import React from 'react';
import styles from './services.module.css';

import certeficate1 from "../../images/certeficate-1.png";
import certeficate2 from "../../images/certeficate-2.png";
import certeficate3 from "../../images/certeficate-3.png";
import certeficate4 from "../../images/certeficate-4.png";
import certeficate5 from "../../images/certeficate-5.png";
import certeficate6 from "../../images/certeficate-6.png";

const Services = () => {
  return (
    <div>
      <section className={styles['what-i-offer-grid']}>
        <section className={styles.partitions}>
          <h2>What I Offer</h2>
          <p>I provide a range of web development services including front-end development, back-end development, and full-stack solutions. My goal is to create responsive, user-friendly websites that meet your business needs.</p>
          <h3>Front-End Development</h3>
          <p className={styles.detail}>Creating visually appealing and interactive user interfaces using HTML, CSS, and JavaScript.</p>
          <h3>Back-End Development</h3>
          <p>Building robust server-side applications and APIs using technologies like Node.js, Express, and databases.</p>
          <button className={styles['call-to-action-btn']} onClick={() => window.location.href='contact.html'}>Get in Touch</button>
        </section>

        <section className={`${styles.partitions} ${styles['skill-set']}`}>
          <h2>Skill Set</h2>
          <div>
            <ul className={styles['skill-icons']}>
              <li>
                <i className={`${styles.icon} fa-brands fa-html5`}></i>
                <h4>HTML5</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-brands fa-css3-alt`}></i>
                <h4>CSS3</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-brands fa-js`}></i>
                <h4>JavaScript</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-brands fa-node-js`}></i>
                <h4>Node.js</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-brands fa-react`}></i>
                <h4>React</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-solid fa-database`}></i>
                <h4>MySQL</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-brands fa-git-alt`}></i>
                <h4>Git</h4>
              </li>
              <li>
                <i className={`${styles.icon} fa-solid fa-database`}></i>
                <h4>MongoDB</h4>
              </li>
            </ul>
          </div>
        </section>
      </section>
     
      <section className={styles.certeficates}>
        <h2>Certeficates</h2>
        <p>Qualifications over the years.</p>
        <div className={styles.scrollable}>
          <button className={styles['left-btn']}><i className="fa-solid fa-angle-left"></i></button>
          <div className={styles['proof-images']}> 
            <img src={certeficate1} alt="certeficate-1"/>
            <img src={certeficate2} alt="certeficate-2"/>
            <img src={certeficate3} alt="certeficate-3"/>
            <img src={certeficate4} alt="certeficate-4"/>
            <img src={certeficate5} alt="certeficate-5"/>
            <img src={certeficate6} alt="certeficate-6"/>
          </div>
          <button className={styles['right-btn']}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </section>
    </div>
  );
}

export default Services;
