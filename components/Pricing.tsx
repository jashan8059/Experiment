import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Invest in Your Future
          </h2>
          <p className="text-gray-600">Choose a plan that fits your exploration style.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border ${plan.color} ${plan.isPopular ? 'transform md:-translate-y-4 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1 text-sm">/year</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="mt-0.5 min-w-[1.25rem] h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90 shadow-md ${plan.buttonColor}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;