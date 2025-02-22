import React from 'react';
import styles from './projects.module.css';

import pic1 from "../../images/project-1.png";
import pic2 from "../../images/project-2.png";
import pic3 from "../../images/project-3.png";

const Projects = () => {
  return (
    <div className={styles.main}>
        <h2>My Projects</h2>
        <section className={styles.upper}>
            <div className={styles.project}>
                <a href="https://ritaayalew.github.io/MyNetflix-clone-2024/">
                    <img src={pic1} alt="Netflix Clone"/>
                </a>
                <h3>Netflix Clone</h3>
                <p>A fully responsive clone of Netflix with a sleek UI and integrated video streaming capabilities.</p>
            </div>

            <div className={styles.project}>
                <a href="https://www.amazon.com/">
                    <img src={pic2} alt="Amazon Clone"/>
                </a>
                <h3>Amazon Clone</h3>
                <p>An e-commerce platform inspired by Amazon, featuring product listings, shopping cart, and checkout functionalities.</p>
            </div>

            <div className={styles.project}>
                <a href="https://www.zomato.com/">
                    <img src={pic3} alt="Zomato Clone"/>
                </a>
                <h3>Zomato Clone</h3>
                <p>A restaurant discovery and food ordering platform that allows users to browse restaurants, view menus, and place orders online, mimicking the features of Zomato.</p>
            </div>
            
        </section>

        <section className={styles.collaboration}>
            <h2>Collaborate with Me</h2>
            <p>If you're excited about building innovative web solutions and think we could create something amazing together, let's connect. I'm always open to new projects and collaborations.</p>
            <button className={styles.callToActionBtn} onClick={() => window.location.href='contact.html'}>Get in Touch</button>
        </section>
    </div>
  );
}

export default Projects;
