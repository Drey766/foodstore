'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Header.module.css';
import { ShoppingBasket } from '@mui/icons-material';
import Link from 'next/link';

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

          <div className={styles.navContainer}>
            <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/about" className={styles.navLink}>About Us</Link>
              <Link href="/menu" className={styles.navLink}>Menu</Link>
              <Link href="/reviews" className={styles.navLink}>Reviews</Link>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            <div className={styles.headerActions}>
              <Link href={'/cart'} className={`${styles.iconButton} ${styles.cartButton}`} aria-label="Cart">
                <ShoppingBasket />
                {totalItems > 0 && (
                  <span className={styles.cartBadge}>{totalItems}</span>
                )}
              </Link>
              <Link href='/reservation' className={styles.reserveBtn}>Reserve Now</Link>
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
      </div>
    </header>
  );
};

export default Header;
