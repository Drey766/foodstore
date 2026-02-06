'use client';

import React from 'react';
import { Chef } from '../types';
import styles from '../styles/Chefs.module.css';
import chef1 from '@/../public/images/pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg'
import chef2 from '@/../public/images/rc-cf-FMh5o5m5N9E-unsplash.jpg'
import chef3 from '@/../public/images/louis-hansel-v3OlBE6-fhU-unsplash.jpg'
import chef4 from '@/../public/images/febrian-zakaria-SiQgni-cqFg-unsplash.jpg'
import Image from 'next/image';

const chefs: Chef[] = [
  { id: 1, name: 'Savannah Nguyen', role: 'Head Chef', image: chef1 },
  { id: 2, name: 'Esther Howard', role: 'Sous Chef', image: chef2 },
  { id: 3, name: 'Ravien Ridtaway', role: 'Pastry Chef', image: chef3 },
  { id: 4, name: 'Albert Flores', role: 'Executive Chef', image: chef4 },
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
                <Image className={styles.chefEmoji} src={chef.image} alt='Chef image' height={6000} width={4000} />
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
