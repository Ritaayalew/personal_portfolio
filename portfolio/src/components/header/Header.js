import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>Rita</p>
            </div>
            <nav className={styles.navBar}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><a href="./index.html">Home</a></li>
                    <li className={styles.navLink}><a href="./src/about.html">About</a></li>
                    <li className={styles.navLink}><a href="./src/services.html">Services</a></li>
                    <li className={styles.navLink}><a href="./src/projects.html">Projects</a></li>
                    <li className={styles.navLink}><a href="./src/contact.html">Contact</a></li>
                </ul>
                <button className={styles.burgerMenu}><i className="fa fa-bars"></i></button>
            </nav>
        </div>

            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <p>Rita</p>
                    <button className={styles.closeButton}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./src/about.html">About</a></li>
                    <li><a href="./src/services.html">Services</a></li>
                    <li><a href="./src/projects.html">Projects</a></li>
                    <li><a href="./src/contact.html">Contact</a></li>
                </ul>
            </div>

    </div>
  )
}

export default Header