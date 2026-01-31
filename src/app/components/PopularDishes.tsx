'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import styles from '../styles/PopularDishes.module.css';
import DishCard from './DishCard';

const popularDishes: MenuItem[] = [
  {
    id: 1,
    name: 'Pasta',
    description: 'Italian pasta with special sauce',
    price: 35.00,
    rating: 5.0,
    image: '🍝',
  },
  {
    id: 2,
    name: 'French Fries',
    description: 'Crispy golden french fries',
    price: 65.00,
    rating: 4.8,
    image: '🍟',
  },
  {
    id: 3,
    name: 'Chicken Shawarma',
    description: 'Middle eastern delicacy',
    price: 95.00,
    rating: 4.9,
    image: '🌯',
  },
  {
    id: 4,
    name: 'Fish Curry',
    description: 'Spicy fish curry with rice',
    price: 95.00,
    rating: 5.0,
    image: '🍛',
  },
];

const PopularDishes: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (dish: MenuItem): void => {
    addToCart(dish);
  };

  return (
    <section className={styles.popularDishes}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Popular Dishes</h2>
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

        <div className={styles.dishesGrid}>
          {popularDishes.map((dish, index) => (
            <DishCard key={index} description={dish.description} image={dish.image} name={dish.name} rating={dish.rating} price={dish.price} food={dish} id={dish.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
