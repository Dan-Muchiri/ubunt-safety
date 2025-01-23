// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>Email: ubuntusafetysolution@gmail.com </p>
          <p>Phone: +254 723 807 031 | +254 714 275 1190</p>
          <a
            href="https://wa.me/254723807031" /* Replace with your WhatsApp number */
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Ubuntu Safety Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
