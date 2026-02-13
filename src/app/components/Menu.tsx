'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import styles from '../styles/Menu.module.css';
import Image from 'next/image';
import data from '../data/menu.json'
import MenuCard from './MenuCard';

const menuCategories: string[] = ['All', 'Breakfast', 'Dessert', 'Salad', 'Japanese', 'Drinks', 'Lunch', 'Main Item'];

const menuItems: MenuItem[] = data.menu

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { cart, addToCart } = useCart();
  

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
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <MenuCard name={item.name} image={item.image} id={item.id} rating={item.rating} price={item.price} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
