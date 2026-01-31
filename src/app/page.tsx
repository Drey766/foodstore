'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import PopularDishes from './components/PopularDishes';
import ServiceSection from './components/ServiceSection';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Chefs from './components/Chefs';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularDishes />
        <ServiceSection />
        <Menu />
        <Reservation />
        <Testimonials />
        <Chefs />
        <MobileApp />
      </main>
      <Footer />
    </>
  );
}
