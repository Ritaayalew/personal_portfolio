import React from 'react'
import styles from "./home.module.css";

import bannerImage from "../../images/pic-1.jpg";

const Home = () => {
  return (
    <div>
        <div className={styles.gridContainer}>

            <div className={styles.partitions}>
                <h1>Rita <span className={styles.stairStyle}>Ayalew</span></h1>
                <h2>Crafting the Web, <span className={styles.stairStyle}>One Pixel at a Time</span></h2>
                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/rita-ayalew-354802308/" aria-label="Linkedin">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/Ritaayalew" aria-label="Github">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/pomita90" aria-label="Instagram">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
                <p>If you want your ideas crafted to perfection, you've come to the right place. Let's create something amazing together.</p>
            </div>

            <div className={styles.partitions}>
                <div className={styles.portraitContainer}>
                    <img src={bannerImage} alt="Portrait of Rita Ayalew, web developer"/>
                </div>
                <button className={styles.callToActionBtn} onclick="window.location.href='./src/contact.html'">Get in Touch</button>
            </div>
        </div>
    </div>
  )
}

export default Home