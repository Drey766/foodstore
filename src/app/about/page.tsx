'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Marcus Chen',
    role: 'Executive Chef & Founder',
    image: '👨‍🍳',
    bio: 'With 15 years of culinary experience across Asia and Europe, Marcus brings innovation and tradition together.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Head Pastry Chef',
    image: '👩‍🍳',
    bio: 'Award-winning pastry chef specializing in fusion desserts that blend Eastern and Western flavors.',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Sous Chef',
    image: '👨‍🍳',
    bio: 'Trained in classical French cuisine, David ensures every dish meets our high standards of excellence.',
  },
  {
    id: 4,
    name: 'Emily Park',
    role: 'Restaurant Manager',
    image: '👩‍💼',
    bio: 'Emily ensures every guest has an unforgettable dining experience with her attention to detail.',
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'Head Sommelier',
    image: '👨‍💼',
    bio: 'Expert in wine pairing, James curates our extensive wine collection to complement every dish.',
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Specialty Chef',
    image: '👩‍🍳',
    bio: 'Priya brings authentic flavors from her heritage, specializing in aromatic spices and traditional techniques.',
  },
];

const values: Value[] = [
  {
    icon: '🌿',
    title: 'Fresh Ingredients',
    description: 'We source the finest organic ingredients from local farms, ensuring quality and sustainability in every dish.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Craftsmanship',
    description: 'Our chefs bring decades of combined experience, crafting each dish with passion and precision.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    description: 'Every meal is prepared with care and dedication, treating our guests like family.',
  },
  {
    icon: '🌍',
    title: 'Global Flavors',
    description: 'We blend culinary traditions from around the world, creating unique and memorable flavor combinations.',
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices, from sourcing to packaging, we care for our planet.',
  },
  {
    icon: '🎯',
    title: 'Quality Standards',
    description: 'We maintain the highest hygiene and quality standards, ensuring safety and excellence.',
  },
];

const stats: Stat[] = [
  { number: '15+', label: 'Years of Experience', icon: '📅' },
  { number: '50K+', label: 'Happy Customers', icon: '😊' },
  { number: '200+', label: 'Dishes Served Daily', icon: '🍽️' },
  { number: '4.9', label: 'Average Rating', icon: '⭐' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Story</h1>
              <p className={styles.heroSubtitle}>
                A journey of passion, flavor, and unforgettable experiences
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyContent}>
              <div className={styles.storyLeft}>
                <div className={styles.storyImageWrapper}>
                  <div className={styles.storyImage}>
                    <span className={styles.storyEmoji}>🍽️</span>
                  </div>
                  <div className={styles.floatingElement1}>🥘</div>
                  <div className={styles.floatingElement2}>🍜</div>
                </div>
              </div>
              <div className={styles.storyRight}>
                <h2 className={styles.sectionTitle}>Where It All Began</h2>
                <div className={styles.storyText}>
                  <p>
                    Founded in 2009, Bites started as a small family kitchen with a big dream: 
                    to bring authentic, delicious food to our community. What began as a passion 
                    project by Chef Marcus Chen has grown into a beloved dining destination.
                  </p>
                  <p>
                    Our journey has been guided by a simple philosophy - every dish should be 
                    an experience. We blend traditional cooking techniques with modern innovation, 
                    sourcing the finest ingredients and crafting each plate with love and attention 
                    to detail.
                  </p>
                  <p>
                    Today, Bites is more than just a restaurant. It's a gathering place where 
                    friends become family, where celebrations happen, and where every meal tells 
                    a story. We're proud to serve our community and grateful for the loyalty of 
                    our customers who have supported us through the years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={styles.statCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What We Stand For</h2>
            <p className={styles.sectionSubtitle}>
              Our core values guide everything we do, from sourcing ingredients to serving our guests
            </p>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={styles.valueCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Philosophy Section */}
        <section className={styles.philosophySection}>
          <div className="container">
            <div className={styles.philosophyContent}>
              <div className={styles.philosophyLeft}>
                <h2 className={styles.sectionTitle}>Our Food Philosophy</h2>
                <div className={styles.philosophyText}>
                  <h3>Fresh, Local, Seasonal</h3>
                  <p>
                    We believe the best meals start with the best ingredients. That's why we 
                    partner with local farmers and suppliers who share our commitment to quality 
                    and sustainability. Our menu changes with the seasons to ensure we're always 
                    using ingredients at their peak.
                  </p>
                  <h3>Fusion with Respect</h3>
                  <p>
                    Our kitchen celebrates culinary diversity. We draw inspiration from Italian, 
                    Japanese, Mediterranean, and Asian cuisines, creating dishes that honor 
                    traditional techniques while embracing modern creativity.
                  </p>
                  <h3>No Compromises</h3>
                  <p>
                    Every dish that leaves our kitchen meets our exacting standards. From 
                    preparation to plating, we take pride in our craft and never cut corners. 
                    Your satisfaction is our success.
                  </p>
                </div>
              </div>
              <div className={styles.philosophyRight}>
                <div className={styles.cuisineList}>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🍝</span>
                    <span className={styles.cuisineName}>Italian Classics</span>
                  </div>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🍱</span>
                    <span className={styles.cuisineName}>Japanese Cuisine</span>
                  </div>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🥗</span>
                    <span className={styles.cuisineName}>Mediterranean</span>
                  </div>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🍜</span>
                    <span className={styles.cuisineName}>Asian Fusion</span>
                  </div>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🥩</span>
                    <span className={styles.cuisineName}>Premium Steaks</span>
                  </div>
                  <div className={styles.cuisineItem}>
                    <span className={styles.cuisineIcon}>🍰</span>
                    <span className={styles.cuisineName}>Artisan Desserts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.sectionSubtitle}>
              The talented individuals who bring our vision to life every day
            </p>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className={styles.teamCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.teamImage}>
                    <span className={styles.teamEmoji}>{member.image}</span>
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Experience Bites Today</h2>
              <p className={styles.ctaText}>
                Join us for an unforgettable dining experience. Whether it's a casual lunch, 
                romantic dinner, or special celebration, we're here to make it memorable.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/menu" className={styles.ctaBtn}>
                  View Our Menu
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Contact Us
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

export default AboutPage;
