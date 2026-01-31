'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import styles from '../styles/Menu.module.css';

const menuCategories: string[] = ['All', 'Breakfast', 'Dessert', 'Salad', 'Japanese', 'Drinks', 'Lunch', 'Main Item'];

const menuItems: MenuItem[] = [
  { id: 5, name: 'Pasta', category: 'Main Item', price: 35.00, rating: 5.0, image: '🍝' },
  { id: 6, name: 'French Fries', category: 'Main Item', price: 65.00, rating: 4.8, image: '🍟' },
  { id: 7, name: 'Chicken Shawarma', category: 'Main Item', price: 95.00, rating: 4.9, image: '🌯' },
  { id: 8, name: 'Fish Curry', category: 'Main Item', price: 95.00, rating: 5.0, image: '🍛' },
  { id: 9, name: 'Breakfast Bowl', category: 'Breakfast', price: 45.00, rating: 4.7, image: '🥣' },
  { id: 10, name: 'Pancakes', category: 'Breakfast', price: 55.00, rating: 4.9, image: '🥞' },
  { id: 11, name: 'Caesar Salad', category: 'Salad', price: 75.00, rating: 4.8, image: '🥗' },
  { id: 12, name: 'Chocolate Cake', category: 'Dessert', price: 85.00, rating: 5.0, image: '🍰' },
  { id: 13, name: 'Sushi Roll', category: 'Japanese', price: 120.00, rating: 5.0, image: '🍱' },
  { id: 14, name: 'Ramen', category: 'Japanese', price: 110.00, rating: 4.9, image: '🍜' },
  { id: 15, name: 'Fresh Juice', category: 'Drinks', price: 40.00, rating: 4.6, image: '🧃' },
  { id: 16, name: 'Iced Coffee', category: 'Drinks', price: 50.00, rating: 4.8, image: '☕' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { addToCart } = useCart();

  const filteredItems: MenuItem[] = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className={styles.menu} id="menu">
      <div className="container">
        <h2 className={styles.title}>Our Regular Menu Pack</h2>

        <div className={styles.categoryFilter}>
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.menuGrid}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.menuCard}
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className={styles.menuImage}>
                <span className={styles.menuEmoji}>{item.image}</span>
              </div>
              <h3 className={styles.menuName}>{item.name}</h3>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    {i < Math.floor(item.rating) ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
              <div className={styles.menuFooter}>
                <span className={styles.price}>₹{item.price.toFixed(2)}</span>
                <button 
                  className={styles.addBtn}
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
