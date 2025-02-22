import React from 'react'
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>Rita</p>
            </div>
            <nav className={styles.navBar}>
                <ul className={styles.navLinks}>
                    <Link to="/">
                    <li className={styles.navLink}><a href="./index.html">Home</a></li>
                    </Link>
                    <Link to="/about">
                    <li className={styles.navLink}><a href="./src/about.html">About</a></li>
                    </Link>
                    <Link to="/services">
                    <li className={styles.navLink}><a href="./src/services.html">Services</a></li>
                    </Link>
                    <Link to="/projects">
                    <li className={styles.navLink}><a href="./src/projects.html">Projects</a></li>
                    </Link>
                    <Link to="/contact">
                    <li className={styles.navLink}><a href="./src/contact.html">Contact</a></li>
                    </Link>
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
                    <Link to="/">
                    <li className={styles.navLink}><a href="./index.html">Home</a></li>
                    </Link>
                    <Link to="/about">
                    <li className={styles.navLink}><a href="./src/about.html">About</a></li>
                    </Link>
                    <Link to="/services">
                    <li className={styles.navLink}><a href="./src/services.html">Services</a></li>
                    </Link>
                    <Link to="/projects">
                    <li className={styles.navLink}><a href="./src/projects.html">Projects</a></li>
                    </Link>
                    <Link to="/contact">
                    <li className={styles.navLink}><a href="./src/contact.html">Contact</a></li>
                    </Link>
                </ul>
            </div>

    </div>
  )
}

export default Header