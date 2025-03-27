import React from 'react'
import styles from "./footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className={styles.footer}>
            <p>
                Feel free to reach out via 
                <span>
                    <Link to={"/contact"}> Contact</Link>
                </span>
            </p> 
            <p>© 2024 Rita Ayalew. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer