import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-indigo-900 relative overflow-hidden text-center">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-800 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 border-4 border-white/10 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-amber-400/20 rounded-lg animate-spin-slow"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
          Start Early. Aim Smart. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
            Grow Confident.
          </span>
        </h2>
        
        <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
          Join thousands of Class 6 explorers discovering their future today.
        </p>
        
        <button className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
          🎯 Choose Your Career Plan
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;