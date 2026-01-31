'use client';

import React from 'react';
import styles from '../styles/Reservation.module.css';

const Reservation: React.FC = () => {
  return (
    <section className={styles.reservation}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Do You Have Any Dinner<br />
              Plan Today? Reserve<br />
              Your Table
            </h2>
            <p className={styles.description}>
              Make your reservation now and experience the finest dining. Our chefs prepare 
              every dish with passion and attention to detail.
            </p>
            <button className={styles.reserveBtn}>Reserve Now</button>
          </div>

          <div className={styles.right}>
            <div className={styles.foodImageWrapper}>
              <div className={styles.foodCircle}>
                <span className={styles.foodEmoji}>🍲</span>
              </div>
              <div className={styles.steam}>💨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
