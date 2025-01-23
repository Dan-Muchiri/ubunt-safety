import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./HeaderStyles.module.css";
import logo from "../../../public/Ubuntu safety logo.png";
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section id='header' className={styles.container}>
            <div className={styles.sub}>
                <div className={styles.logo}>
                    <img src={logo} alt="Ubuntu Safety Logo" className={styles.logoImage} />
                    <p className={styles.logoName}>Ubuntu Safety Solutions</p>
                </div>
                <div className={styles.left}>
                  <div className={`${styles.navBlock} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <nav className={styles.nav}>
                      <Link to="/" onClick={toggleMenu}>Home</Link>
                      <Link to="/products" onClick={toggleMenu}>Products</Link>
                      <Link to="/about" onClick={toggleMenu}>About us</Link>
                      <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </nav>
                  </div>


                  <div className={styles.menuIcon} onClick={toggleMenu}>
                      {isMenuOpen ? <div className={styles.menu}>Close<FaTimes size={18} /></div> : <div className={styles.menu}>Menu<FaBars size={18} /></div>}
                  </div>
                </div>
            </div>
        </section>
    );
}

export default Header;