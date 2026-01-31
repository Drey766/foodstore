'use client';

import React from 'react';
import { Testimonial } from '../types';
import styles from '../styles/Testimonials.module.css';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Savannah Nguyen',
    review: '"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they\'re doing and what they\'re talking about, and you can tell making the customers happy is their main priority."',
    rating: 5,
    avatar: '👤',
  },
  {
    id: 2,
    name: 'Savannah Nguyen',
    review: '"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they\'re doing and what they\'re talking about, and you can tell making the customers happy is their main priority."',
    rating: 5,
    avatar: '👤',
  },
  {
    id: 3,
    name: 'Savannah Nguyen',
    review: '"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they\'re doing and what they\'re talking about, and you can tell making the customers happy is their main priority."',
    rating: 5,
    avatar: '👤',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customer Says?</h2>
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

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={styles.testimonialCard}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <p className={styles.review}>{testimonial.review}</p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
              <div className={styles.customer}>
                <div className={styles.avatar}>
                  <span>{testimonial.avatar}</span>
                </div>
                <span className={styles.name}>{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
