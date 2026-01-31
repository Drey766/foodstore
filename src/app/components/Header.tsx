'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Header.module.css';
import { ShoppingBasket } from '@mui/icons-material';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { totalItems } = useCart();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🍴</span>
            <span className={styles.logoText}>Bites</span>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#menu" className={styles.navLink}>Menu</a>
            <a href="#blog" className={styles.navLink}>Blog</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.headerActions}>
            <button className={`${styles.iconButton} ${styles.cartButton}`} aria-label="Cart">
              <ShoppingBasket />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>

            <button className={styles.reserveBtn}>Reserve Now</button>

            <button 
              className={styles.mobileMenuBtn}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
