import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeServe from './components/WhatWeServe';
import Survey from './components/Survey';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeServe />
      <Survey />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
