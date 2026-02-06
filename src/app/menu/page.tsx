'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/MenuPage.module.css';

const categories = [
  'All',
  'Breakfast',
  'Main Course',
  'Desserts',
  'Salads',
  'Japanese',
  'Drinks',
  'Appetizers',
  'Pasta',
];

const menuItems: MenuItem[] = [
  // Breakfast
  { id: 1, name: 'Pancake Stack', category: 'Breakfast', price: 55.00, rating: 4.9, image: '🥞', description: 'Fluffy pancakes with maple syrup' },
  { id: 2, name: 'Breakfast Bowl', category: 'Breakfast', price: 45.00, rating: 4.7, image: '🥣', description: 'Healthy grain bowl with fruits' },
  { id: 3, name: 'French Toast', category: 'Breakfast', price: 50.00, rating: 4.8, image: '🍞', description: 'Classic French toast with berries' },
  { id: 4, name: 'Omelette', category: 'Breakfast', price: 60.00, rating: 4.6, image: '🍳', description: 'Three-egg omelette with cheese' },
  
  // Main Course
  { id: 5, name: 'Grilled Chicken', category: 'Main Course', price: 120.00, rating: 5.0, image: '🍗', description: 'Juicy grilled chicken with herbs' },
  { id: 6, name: 'Beef Steak', category: 'Main Course', price: 180.00, rating: 4.9, image: '🥩', description: 'Premium cut ribeye steak' },
  { id: 7, name: 'Fish Curry', category: 'Main Course', price: 95.00, rating: 5.0, image: '🍛', description: 'Spicy fish curry with rice' },
  { id: 8, name: 'Chicken Shawarma', category: 'Main Course', price: 95.00, rating: 4.9, image: '🌯', description: 'Middle eastern delicacy' },
  { id: 9, name: 'BBQ Ribs', category: 'Main Course', price: 150.00, rating: 4.8, image: '🍖', description: 'Slow-cooked BBQ pork ribs' },
  { id: 10, name: 'Lamb Chops', category: 'Main Course', price: 165.00, rating: 4.7, image: '🥘', description: 'Grilled lamb chops with sauce' },
  
  // Pasta
  { id: 11, name: 'Spaghetti Carbonara', category: 'Pasta', price: 85.00, rating: 5.0, image: '🍝', description: 'Creamy Italian carbonara' },
  { id: 12, name: 'Penne Arrabbiata', category: 'Pasta', price: 75.00, rating: 4.7, image: '🍝', description: 'Spicy tomato pasta' },
  { id: 13, name: 'Fettuccine Alfredo', category: 'Pasta', price: 90.00, rating: 4.8, image: '🍝', description: 'Rich and creamy alfredo' },
  { id: 14, name: 'Lasagna', category: 'Pasta', price: 95.00, rating: 4.9, image: '🍝', description: 'Layered pasta with meat sauce' },
  
  // Desserts
  { id: 15, name: 'Chocolate Cake', category: 'Desserts', price: 85.00, rating: 5.0, image: '🍰', description: 'Rich chocolate layer cake' },
  { id: 16, name: 'Cheesecake', category: 'Desserts', price: 80.00, rating: 4.9, image: '🍰', description: 'New York style cheesecake' },
  { id: 17, name: 'Ice Cream Sundae', category: 'Desserts', price: 65.00, rating: 4.8, image: '🍨', description: 'Three scoops with toppings' },
  { id: 18, name: 'Tiramisu', category: 'Desserts', price: 90.00, rating: 5.0, image: '🍰', description: 'Classic Italian dessert' },
  { id: 19, name: 'Apple Pie', category: 'Desserts', price: 70.00, rating: 4.7, image: '🥧', description: 'Warm apple pie with ice cream' },
  
  // Salads
  { id: 20, name: 'Caesar Salad', category: 'Salads', price: 75.00, rating: 4.8, image: '🥗', description: 'Classic caesar with croutons' },
  { id: 21, name: 'Greek Salad', category: 'Salads', price: 70.00, rating: 4.7, image: '🥗', description: 'Fresh Greek style salad' },
  { id: 22, name: 'Garden Salad', category: 'Salads', price: 60.00, rating: 4.6, image: '🥗', description: 'Mixed greens and vegetables' },
  { id: 23, name: 'Chicken Salad', category: 'Salads', price: 85.00, rating: 4.8, image: '🥗', description: 'Grilled chicken with greens' },
  
  // Japanese
  { id: 24, name: 'Sushi Platter', category: 'Japanese', price: 120.00, rating: 5.0, image: '🍱', description: 'Assorted fresh sushi' },
  { id: 25, name: 'Ramen Bowl', category: 'Japanese', price: 110.00, rating: 4.9, image: '🍜', description: 'Rich tonkotsu ramen' },
  { id: 26, name: 'Tempura', category: 'Japanese', price: 95.00, rating: 4.8, image: '🍤', description: 'Crispy fried seafood & veggies' },
  { id: 27, name: 'Teriyaki Chicken', category: 'Japanese', price: 105.00, rating: 4.7, image: '🍗', description: 'Glazed teriyaki chicken' },
  
  // Drinks
  { id: 28, name: 'Fresh Orange Juice', category: 'Drinks', price: 40.00, rating: 4.6, image: '🧃', description: 'Freshly squeezed orange juice' },
  { id: 29, name: 'Iced Coffee', category: 'Drinks', price: 50.00, rating: 4.8, image: '☕', description: 'Cold brew coffee' },
  { id: 30, name: 'Smoothie Bowl', category: 'Drinks', price: 65.00, rating: 4.9, image: '🥤', description: 'Berry smoothie bowl' },
  { id: 31, name: 'Lemonade', category: 'Drinks', price: 35.00, rating: 4.5, image: '🍋', description: 'Fresh homemade lemonade' },
  { id: 32, name: 'Milkshake', category: 'Drinks', price: 55.00, rating: 4.7, image: '🥛', description: 'Thick and creamy milkshake' },
  
  // Appetizers
  { id: 33, name: 'French Fries', category: 'Appetizers', price: 65.00, rating: 4.8, image: '🍟', description: 'Crispy golden french fries' },
  { id: 34, name: 'Chicken Wings', category: 'Appetizers', price: 85.00, rating: 4.9, image: '🍗', description: 'Spicy buffalo wings' },
  { id: 35, name: 'Spring Rolls', category: 'Appetizers', price: 70.00, rating: 4.7, image: '🥟', description: 'Crispy vegetable spring rolls' },
  { id: 36, name: 'Garlic Bread', category: 'Appetizers', price: 45.00, rating: 4.6, image: '🥖', description: 'Toasted garlic bread' },
  { id: 37, name: 'Nachos', category: 'Appetizers', price: 75.00, rating: 4.8, image: '🧀', description: 'Loaded cheese nachos' },
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popular');
  const { addToCart } = useCart();

  // Filter by category
  let filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Filter by search query
  if (searchQuery) {
    filteredItems = filteredItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // popular
        return b.rating - a.rating;
    }
  });

  const handleAddToCart = (item: MenuItem): void => {
    addToCart(item);
  };

  return (
    <>
      <Header />
      <main className={styles.menuPage}>
        {/* Hero Section */}
        <section className={styles.menuHero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Our Menu</h1>
            <p className={styles.heroSubtitle}>
              Discover our delicious selection of dishes crafted with passion and the finest ingredients
            </p>
          </div>
        </section>

        <div className="container">
          {/* Search and Sort Bar */}
          <div className={styles.toolBar}>
            <div className={styles.searchBox}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.sortBox}>
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className={styles.categorySection}>
            <div className={styles.categoryFilter}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className={styles.resultsInfo}>
            <p>
              Showing <strong>{sortedItems.length}</strong> {sortedItems.length === 1 ? 'dish' : 'dishes'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>

          {/* Menu Grid */}
          {sortedItems.length > 0 ? (
            <div className={styles.menuGrid}>
              {sortedItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={styles.menuCard}
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className={styles.cardImage}>
                    <span className={styles.cardEmoji}>{item.image}</span>
                    <div className={styles.cardBadge}>
                      <span className={styles.rating}>⭐ {item.rating}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.cardCategory}>{item.category}</div>
                    <h3 className={styles.cardName}>{item.name}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.cardPrice}>₹{item.price.toFixed(2)}</span>
                      <button 
                        className={styles.addBtn}
                        onClick={() => handleAddToCart(item)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3 className={styles.noResultsTitle}>No dishes found</h3>
              <p className={styles.noResultsText}>
                Try adjusting your search or filter to find what you're looking for
              </p>
              <button 
                className={styles.resetBtn}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Can't find what you're looking for?</h2>
              <p className={styles.ctaText}>
                Contact us for special requests or custom dishes. We're always happy to accommodate your preferences!
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaBtn}>
                  Contact Us
                </Link>
                <Link href="/cart" className={styles.ctaBtnSecondary}>
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
