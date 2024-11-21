import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss'; // Import SCSS module


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Georgi Nyagolov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
