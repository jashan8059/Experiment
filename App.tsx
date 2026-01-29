import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import AimJourney from './components/AimJourney';
import StepByStep from './components/StepByStep';
import CareerLibraries from './components/CareerLibraries';
import Pricing from './components/Pricing';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <SuccessStories />
        <AimJourney />
        <StepByStep />
        <CareerLibraries />
        <Pricing />
        <Insights />
        <FAQ />
        <FinalCTA />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Aimshala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;