import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickFacts from '../components/QuickFacts';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <QuickFacts />
      <Features />
      <Gallery />
      <Location />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;