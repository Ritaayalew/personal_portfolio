import React from 'react';
import styles from './projects.module.css';

import pic1 from "../../images/project-1.png";
import pic2 from "../../images/project-2.png";
import pic3 from "../../images/project-3.png";
import { Link } from 'react-router-dom';
import Button from '../get-in-touch-btn/Button';
import '@fortawesome/fontawesome-free/css/all.css';

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
                <Link to={"https://ritaayalew.github.io/MyNetflix-clone-2024/"}>
                <div className={styles.visit}>
                <i className="fas fa-link" style={{ marginRight: '5px' }}></i> Visit
                </div>
                </Link>
            </div>

            <div className={styles.project}>
                <a href="https://novemb-f2496.web.app/">
                    <img src={pic2} alt="Amazon Clone"/>
                </a>
                <h3>Amazon Clone</h3>
                <p>An e-commerce platform inspired by Amazon, featuring product listings, shopping cart, and checkout functionalities.</p>
                <Link to={"https://novemb-f2496.web.app/"}>
                <div className={styles.visit}>
                <i className="fas fa-link" style={{ marginRight: '5px' }}></i> Visit
                </div>
                </Link>
            </div>


            <div className={styles.project}>
                <a href="https://drive.google.com/file/d/1-Bwd8yuDzCHCZ7kUnU0-cWQ5uv1d4bbT/view?usp=drive_link">
                    <img src={pic3} alt="Zomato Clone"/>
                </a>
                <h3>Enredada Charity</h3>
                <p>The Enredada Elders Charity web app, built in Ethiopia, features a Nest.js RESTful API and a React frontend.</p>
                <Link to={"https://drive.google.com/file/d/1-Bwd8yuDzCHCZ7kUnU0-cWQ5uv1d4bbT/view?usp=drive_link"}>
                <div className={styles.visit}>
                <i className="fas fa-link" style={{ marginRight: '5px' }}></i> Visit
                </div>
                </Link>
            </div>
            
        </section>

        <section className={styles.collaboration}>
            <h2>Collaborate with Me</h2>
            <p>If you're excited about building innovative web solutions and think we could create something amazing together, let's connect. I'm always open to new projects and collaborations.</p>
                <Button/>
        </section>
    
    </div>
  );
}

export default Projects;
