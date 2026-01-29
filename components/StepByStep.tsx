import React from 'react';

const StepByStep: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Assess",
      headline: "Discover interests & strengths.",
      desc: "Take our fun, gamified quiz to unlock your instant AIM Report. It's not a test—it's a mirror to your potential.",
      image: "https://picsum.photos/id/445/600/400",
      accent: "bg-purple-100 text-purple-600"
    },
    {
      id: 2,
      title: "Interact",
      headline: "1:1 counselling & expert talks.",
      desc: "Chat with real career counselors and watch masterclasses from professionals. Ask questions, get answers.",
      image: "https://picsum.photos/id/453/600/400",
      accent: "bg-blue-100 text-blue-600"
    },
    {
      id: 3,
      title: "Map",
      headline: "Career paths, skills & courses.",
      desc: "Get a personalized roadmap tailored to you. See which subjects to pick and what skills to build now.",
      image: "https://picsum.photos/id/6/600/400",
      accent: "bg-amber-100 text-amber-600"
    },
    {
      id: 4,
      title: "Track",
      headline: "Dashboard, goals & progress.",
      desc: "Set small goals and watch yourself grow on your personal dashboard. Celebrate every milestone!",
      image: "https://picsum.photos/id/180/600/400",
      accent: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-auto object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent`}></div>
                
                {/* Floating Step Number */}
                <div className={`absolute top-6 left-6 w-12 h-12 ${step.accent} rounded-full flex items-center justify-center font-bold text-xl shadow-lg`}>
                  {step.id}
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide ${step.accent}`}>
                Step {step.id} - {step.title}
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                {step.headline}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepByStep;