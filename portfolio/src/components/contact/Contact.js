import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.black}>
    <div className={styles.main}>
      <section className={styles['small-box']}>
        <h2>Reach out to me</h2>
        <p>I'm open to hearing about your ideas and what you are seeking for your website. Send me an email, call me, or write to me on my social networks and I'll make sure I get back to you.</p>
      </section>

      <section className={styles.contact}>
        <h1>Contact</h1>
        <div></div>
        <div className={styles['contact-method']}>
          <i className="fa-solid fa-phone"></i>
          <p><b>Phone number</b>: +251-909889844</p>
        </div>
        <div className={styles['contact-method']}>
          <i className="fa-solid fa-envelope"></i>
          <p><b>Email</b>: ritaayalew6@gmail.com</p>
        </div>
        <div className={styles['contact-method']}>
          <i className="fa-solid fa-location-dot"></i>
          <p><b>Address</b>: Arat killo, Addis Ababa, Ethiopia</p>
        </div>
        <p className={styles.descrption}>You can also find me on the platforms below.</p>

        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/rita-ayalew-354802308/" aria-label="Linkedin">
            <i className={`fab fa-linkedin ${styles.falinkedin}`} aria-hidden="true"></i>
          </a>
          <a href="https://github.com/Ritaayalew" aria-label="Github">
            <i className={`fab fa-github ${styles.fagithub}`} aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/pomita90" aria-label="Instagram">
            <i className={`fab fa-instagram ${styles.fainstagram}`} aria-hidden="true"></i>
          </a>
          <a href="https://t.me/poetryyanduuuu" aria-label="Telegram">
            <i className={`fab fa-telegram ${styles.fatelegram}`} aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Contact;
