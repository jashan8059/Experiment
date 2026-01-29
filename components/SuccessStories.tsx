import React from 'react';
import { TESTIMONIALS } from '../constants';
import { BadgeCheck, Star } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Meet Young Explorers Like You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how students just like you found their spark with Aimshala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((student, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl ${student.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{student.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="bg-white/60 px-2 py-0.5 rounded-md">{student.classGrade}</span>
                    <span>•</span>
                    <span className="truncate max-w-[120px]">{student.school}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Tried</p>
                  <p className="font-medium text-gray-800">{student.tried}</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-white/50">
                   <div className="flex items-center gap-2 mb-1">
                      <BadgeCheck className="w-5 h-5 text-green-500" />
                      <p className="text-xs font-bold text-green-600 uppercase tracking-wide">Achieved</p>
                   </div>
                  <p className="font-bold text-gray-900">{student.achieved}</p>
                </div>
              </div>
              
              {/* Decorative sparkle */}
              <Star className="absolute top-4 right-4 text-yellow-400 w-6 h-6 fill-current opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;