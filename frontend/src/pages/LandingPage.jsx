import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickFacts from '../components/QuickFacts';
import Features from '../components/Features';
import FloorPlan from '../components/FloorPlan';
import Amenities from '../components/Amenities';
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
      <FloorPlan />
      <Amenities />
      <Gallery />
      <Location />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;