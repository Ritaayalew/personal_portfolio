import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className={styles.mainHeader}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p>Rita</p>
        </div>
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <Link className={styles.link} to="/">
              <li className={styles.navLink}>Home</li>
            </Link>
            <Link className={styles.link} to="/about">
              <li className={styles.navLink}>About</li>
            </Link>
            <Link className={styles.link} to="/services">
              <li className={styles.navLink}>Services</li>
            </Link>
            <Link className={styles.link} to="/projects">
              <li className={styles.navLink}>Projects</li>
            </Link>
            <Link className={styles.link} to="/contact">
              <li className={styles.navLink}>Contact</li>
            </Link>
          </ul>
          <button className={styles.burgerMenu} onClick={toggleSidebar}>
            <i className={`fa fa-bars ${styles.faBars}`}></i>
          </button>
        </nav>
        <DarkMode className={styles.switch}/>
      </div>

      {showSidebar && (
        <>
          <div className={styles.backgroundOverlay} onClick={toggleSidebar}></div>
          <div className={styles.sidebar} ref={sidebarRef}>
            <div className={styles.logo}>
              <p>Rita</p>
              <button className={styles.closeButton} onClick={toggleSidebar}>
                <i className={`fa-solid fa-xmark ${styles.faxmark}`}></i>
              </button>
            </div>
            <ul>
              <Link className={styles.link} to="/">
                <li className={styles.navLink}>Home</li>
              </Link>
              <Link className={styles.link} to="/about">
                <li className={styles.navLink}>About</li>
              </Link>
              <Link className={styles.link} to="/services">
                <li className={styles.navLink}>Services</li>
              </Link>
              <Link className={styles.link} to="/projects">
                <li className={styles.navLink}>Projects</li>
              </Link>
              <Link className={styles.link} to="/contact">
                <li className={styles.navLink}>Contact</li>
              </Link>
            </ul>
          </div>
        </>
      )}

      
    </div>
    
  );
};

export default Header;

