import React, { useState } from 'react';
import { LIBRARY_CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const CareerLibraries: React.FC = () => {
  const [activeTab, setActiveTab] = useState(LIBRARY_CATEGORIES[0].id);

  const activeCategory = LIBRARY_CATEGORIES.find(cat => cat.id === activeTab) || LIBRARY_CATEGORIES[0];

  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Explore Our Career Libraries</h2>
          <p className="text-indigo-200">Everything you need to know, all in one place.</p>
        </div>

        <div className="bg-white rounded-3xl p-2 md:p-4 shadow-2xl flex flex-col md:flex-row min-h-[400px]">
          {/* Tabs Sidebar */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 p-2 md:p-4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 hide-scrollbar">
            {LIBRARY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal ${
                  activeTab === cat.id 
                    ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <cat.icon size={20} className={activeTab === cat.id ? 'text-indigo-600' : 'text-gray-400'} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center text-gray-800">
            <div className="animate-fade-in-up">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <activeCategory.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{activeCategory.label}</h3>
              <p className="text-gray-600 mb-8 text-lg">{activeCategory.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                    {item}
                  </div>
                ))}
              </div>

              <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Explore {activeCategory.label} Library <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerLibraries;