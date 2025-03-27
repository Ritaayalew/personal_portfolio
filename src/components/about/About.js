import React from 'react'
import styles from "./about.module.css";

import pic1 from "../../images/pic-2.jpg";
import pic2 from "../../images/pic-3.jpg";
import Button from '../get-in-touch-btn/Button';

const About = () => {
  return (
    <div>
        <section className={styles.aboutMe}>
            <section className={styles.partition}>
                <div className={styles.imageContainer}>
                    <div className={styles.image + ' ' + styles['img-1']} >
                        <img src={pic1} alt="Portrait of Rita Ayalew, web developer"/>
                    </div>
                    <div className={styles.image + ' ' + styles['img-2']} >
                        <img src={pic2} alt="Portrait of Rita Ayalew, web developer-2"/>
                    </div>
                </div>
                <h2>Meet Me</h2>
                <p>Hello! I'm Rita Ayalew, a passionate web developer based in Addis Ababa, Ethiopia. I am currently a software engineering student at Addis Ababa Science and Technology Institute of Technology (SITE).</p>
            </section>
    
            <section className={`${styles.partition} ${styles.hobbies}`}>
                <h2>Hobbies</h2>
                <p>When I'm not coding i like trying out new recipes, which lets me explore diverse cuisines. I enjoy drawing and expressing my creativity visually. I also write poems and find joy in reading novels, which transport me to different worlds.</p>
            </section>
        </section>
        
        <section className={styles.letsConnect}>
            <div className={styles.circle}>
                <h2>Let's Connect</h2>
                <p>Diving into the tech world has armed me with a powerful mix of technical know-how and creativity! I love the opportunity to take on challenges with fresh ideas. Let's build something incredible together!</p>
                <Button />
            </div>
        </section>
        
    </div>
  )
}

export default About