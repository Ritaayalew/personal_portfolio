import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
        <div className={styles.footer}>
            <p>
                Feel free to reach out via 
                <span>
                    <a href="./src/contact.html" > Contact</a>
                </span>
            </p> 
            <p>© 2024 Rita Ayalew. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer