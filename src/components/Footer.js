import React from "react";
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footerText}>
            <div className={styles.creat}>created by</div>
            <div className={styles.link}><a href="https://github.com/mamdrez" rel="noopener noreferrer" target="_blank">MOHAMMADREZA KHODABANDEHLU</a></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
