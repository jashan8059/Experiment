import React from 'react';
import { ArrowRight, Sparkles, Microscope, Palette, Code, Stethoscope } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-amber-50">
      {/* Background Blobs */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-[-50px] w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold text-sm border border-green-200 shadow-sm">
            <Sparkles size={16} />
            🌱 For Class 6 Explorers
          </span>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight">
            Not sure what you want to be when you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">grow up?</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Aimshala helps students discover interests, strengths and future career paths — step by step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-300 transition-all flex items-center justify-center gap-2">
              🎯 Choose Your Career Plan
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-indigo-900 font-bold rounded-2xl shadow-md hover:shadow-lg transition-all border border-indigo-100 flex items-center justify-center gap-2">
              📘 Take AIM Test
            </button>
          </div>
          
          <p className="text-sm text-gray-500 font-medium pt-2">
            No pressure. No confusion. Just clear next steps.
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl border-8 border-white overflow-hidden flex items-center justify-center">
              <img 
                src="https://picsum.photos/id/338/800/800" 
                alt="Student Dreaming" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-0 right-10 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
              <Microscope className="w-8 h-8 text-blue-500" />
            </div>
            <div className="absolute bottom-10 left-0 bg-white p-3 rounded-2xl shadow-lg animate-bounce animation-delay-1000">
              <Palette className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute top-1/2 -right-6 bg-white p-3 rounded-2xl shadow-lg animate-pulse">
              <Code className="w-8 h-8 text-indigo-500" />
            </div>
             <div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-lg animate-pulse animation-delay-500">
              <Stethoscope className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;