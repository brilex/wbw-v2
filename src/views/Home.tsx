import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { Process } from '../components/home/Process';
import { Projects } from '../components/home/Projects';
import { FinalCTA } from '../components/home/FinalCTA';
export function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <Process />
      <Projects />
      <FinalCTA />
    </main>);

}