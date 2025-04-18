
import React from 'react';
import Header from '@/components/Header';
import CategoriesNav from '@/components/CategoriesNav';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecialOffers from '@/components/SpecialOffers';
import CustomerReviews from '@/components/CustomerReviews';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoriesNav />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts title="Featured Products" viewAllLink="/products/featured" />
        <SpecialOffers />
        <FeaturedProducts title="Trending Products" viewAllLink="/products/trending" />
        <CustomerReviews />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
