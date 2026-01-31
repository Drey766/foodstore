'use client';

import React from 'react';
import { Chef } from '../types';
import styles from '../styles/Chefs.module.css';

const chefs: Chef[] = [
  { id: 1, name: 'Savannah Nguyen', role: 'Head Chef', image: '👨‍🍳' },
  { id: 2, name: 'Esther Howard', role: 'Sous Chef', image: '👨‍🍳' },
  { id: 3, name: 'Ravien Ridtaway', role: 'Pastry Chef', image: '👨‍🍳' },
  { id: 4, name: 'Albert Flores', role: 'Executive Chef', image: '👨‍🍳' },
];

const Chefs: React.FC = () => {
  return (
    <section className={styles.chefs}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Chefs</h2>
          <div className={styles.navigation}>
            <button className={styles.navBtn} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`${styles.navBtn} ${styles.navBtnActive}`} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.chefsGrid}>
          {chefs.map((chef, index) => (
            <div 
              key={chef.id} 
              className={styles.chefCard}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={styles.chefImage}>
                <span className={styles.chefEmoji}>{chef.image}</span>
              </div>
              <h3 className={styles.chefName}>{chef.name}</h3>
              <p className={styles.chefRole}>{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
