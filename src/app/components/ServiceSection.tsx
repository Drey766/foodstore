'use client';

import React from 'react';
import { Service } from '../types';
import styles from '../styles/ServiceSection.module.css';
import Link from 'next/link';

const services: Service[] = [
  { icon: '🕐', title: '24/7 Service', description: 'Available anytime' },
  { icon: '👨‍🍳', title: 'Experienced Head Chefs', description: 'Professional cooking' },
  { icon: '🌿', title: 'Organic Food', description: 'Fresh and healthy' },
  { icon: '🧼', title: 'Hygiene Focus', description: 'Clean and safe' },
  { icon: '🍽️', title: 'Clean Dish', description: 'Spotless service' },
  { icon: '🌡️', title: 'Proper Environment & Temperature', description: 'Perfect conditions' },
];

const ServiceSection: React.FC = () => {
  return (
    <section className={styles.serviceSection} id="about">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.chefImageWrapper}>
              <div className={styles.chefCircle}>
                <span className={styles.chefEmoji}>👨‍🍳</span>
              </div>
              <div className={styles.foodDecor1}>🍕</div>
              <div className={styles.foodDecor2}>🍔</div>
              <div className={styles.foodDecor3}>🍜</div>
              <div className={styles.foodDecor4}>🥗</div>
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.title}>
              We Are More Than<br />
              Just A Restaurant
            </h2>
            <p className={styles.description}>
              We’re passionate about creating memorable dining experiences. From carefully sourced ingredients to warm, attentive service, everything we do is centered around quality and consistency.
            </p>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={styles.serviceCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div className={styles.serviceContent}>
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href={'/about'} className={styles.aboutBtn}>About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
