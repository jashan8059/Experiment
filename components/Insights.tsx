import React from 'react';
import { INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10">Career Insights</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-700">
                  {article.category}
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500">{article.readTime}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;