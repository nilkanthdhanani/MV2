import React from 'react';
import HeroBanner from './heroBanner';
import Learn from './learn';
import Featured from './featured';
import Venue from './venue';
import Sponsore from './sponsor';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Learn />
      <Featured />
      <Venue />
      <Sponsore/>
    </main>
  )
}
