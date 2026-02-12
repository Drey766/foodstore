'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import styles from '../styles/PopularDishes.module.css';
import data from '../data/data.json'
import Image from 'next/image';
import image1 from '@/../public/images/dataImages/pexels-barfisch-pix-115740(1).jpg'
import DishCard from './DishCard';

const popularDishes: MenuItem[] = data.items

const PopularDishes: React.FC = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, popularDishes.length - itemsPerView);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleAddToCart = (dish: MenuItem): void => {
    addToCart(dish);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className={styles.popularDishes}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Popular Dishes</h2>
          <div className={styles.navigation}>
            <button 
              className={`${styles.navBtn} ${!canGoPrev ? styles.disabled : ''}`}
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={`${styles.navBtn} ${styles.navBtnActive} ${!canGoNext ? styles.disabled : ''}`}
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div 
            ref={carouselRef}
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {popularDishes.map((dish) => (
              <div key={dish.id}>
                <DishCard description={dish.description} image={dish.image} name={dish.name} rating={dish.rating} price={dish.price} food={dish} id={dish.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className={styles.indicators}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
