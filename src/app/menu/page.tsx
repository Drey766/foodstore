'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/MenuPage.module.css';
import menu from '../data/menuItems.json'
import Image from 'next/image';

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

const menuItems: MenuItem[] = menu.menu;

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
                    <Image className={styles.cardEmoji} src={item.image} alt={item.name} width={400} height={200} />
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
