import React from 'react';
import { JOURNEY_STEPS } from '../constants';

const AimJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">The Process</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
            The AIM Journey Overview
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((step) => (
            <div 
              key={step.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.color} group-hover:scale-110 transition-transform`}>
                <step.icon size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AimJourney;