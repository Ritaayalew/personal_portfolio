import React from 'react'
import styles from "./button.module.css";
import { Link } from 'react-router-dom';


const Button = () => {
  return (
    <div>
        <Link className={styles.link} to="contact">
            <button className={styles.callToActionBtn}>Get in Touch</button>
        </Link>
    </div>
  )
}

export default Button
