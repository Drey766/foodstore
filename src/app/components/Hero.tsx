'use client';

import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import img1 from '@/../public/images/pexels-filipe-coelho-32247889-13640503_1_-removebg-preview.png'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              We Serve The Test<br />
              You Love <span className={styles.emoji}>😋</span>
            </h1>
            <p className={styles.heroText}>
              This is a type of restaurant which typically serves food and drinks, in addition 
              to light refreshments such as baked goods or snacks. The term comes from the 
              French word.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>Reserve Now</button>
              <button className={styles.secondaryBtn}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Search
              </button>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.foodImageWrapper}>
              <div className={styles.foodImage}>
                <div className={styles.plateCircle}></div>
                <div className={styles.foodPlaceholder}><Image src={img1} alt='imahe' height={407} width={613} /> </div>
              </div>
              <div className={styles.floatingDecor1}>🥬</div>
              <div className={styles.floatingDecor2}>🍃</div>
            </div>

            <div className={styles.quickActions}>
              <div className={styles.quickAction} style={{background: '#FFE8CC'}}>
                <div className={styles.actionIcon} >
                  <span>🏠</span>
                </div>
                <span>Home</span>
              </div>
              <div className={styles.quickAction} style={{background: '#FFE0B2'}}>
                <div className={styles.actionIcon} >
                  <span>🎁</span>
                </div>
                <span>Reward</span>
              </div>
              <div className={styles.quickAction} style={{background: '#FFF3E0'}}>
                <div className={styles.actionIcon} >
                  <span>📦</span>
                </div>
                <span>Order</span>
              </div>
              <div className={styles.quickAction} style={{background: '#FFECB3'}}>
                <div className={styles.actionIcon} >
                  <span>📱</span>
                </div>
                <span>Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.decorCircle1}></div>
        <div className={styles.decorCircle2}></div>
        <div className={styles.decorCircle3}></div>
      </div>
    </section>
  );
};

export default Hero;
