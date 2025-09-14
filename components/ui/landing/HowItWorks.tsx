// components/HowItWorks.jsx

import { howItWorksData } from "@/json";



// A sub-component for each step card for cleaner code
const WorkStepCard = ({ icon, title, description, isActive }: any) => {
  const cardClasses = isActive
    ? "bg-white shadow-2xl scale-105 border-transparent"
    : "bg-white/70 backdrop-blur-sm border-gray-200";

  const titleClasses = isActive ? "text-brand-primary" : "text-gray-800";
  const dividerClasses = isActive ? "bg-brand-primary" : "bg-gray-300";

  return (
    <div
      className={`relative p-8 text-center flex flex-col items-center gap-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${cardClasses}`}
    >
      <div className="bg-white p-5 rounded-full mb-2">{icon}</div>
      <h3 className={`text-2xl font-semibold font-lato ${titleClasses}`}>
        {title}
      </h3>
      <div className={`h-1 w-20 rounded-full ${dividerClasses}`} />
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/howitworkbg.png" // Replace with your background image in the `public` folder
        alt="Abstract background"
        className="absolute inset-0 w-full h-full object-cover -z-0 opacity-20"
      />

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            {howItWorksData.title}
          </h2>
          <p className="mt-3 text-xl text-gray-700 font-lato">
            {howItWorksData.subtitle}
          </p>
        </div>

        {/* Steps Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksData.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`absolute   top-20 -right-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] ${index === howItWorksData.steps.length - 1 || index === 1 ? 'hidden' : 'lg:block md:block hidden'} `}>
                <svg
                  width="197"
                  height="50"
                  viewBox="0 0 197 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M1.68945 41.3082C1.68945 41.3082 39.4442 1.50001 96.4983 1.50001C153.552 1.50001 191.307 41.3083 191.307 41.3083"
                      stroke="#387FD2"
                  
                    
       
                    />
                    <path
                      d="M190.25 29.1094L191.965 42.0908L180.586 43.9268"
                      stroke="#387FD2"
                
                    
                    
                    />
                  </g>
                </svg>
              </div>

              
              <div className={`absolute hidden    top-28 -right-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] ${index === howItWorksData.steps.length - 1 || index === 0 || index === 2 ? 'hidden' : 'lg:block'}`}>
              <svg width="197" height="50" viewBox="0 0 197 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M0.986325 8.69175C0.986325 8.69175 38.7411 48.5 95.7952 48.5C152.849 48.5 190.604 8.69174 190.604 8.69174" stroke="#387FD2"   />
<path d="M189.547 20.8906L191.262 7.90915L179.883 6.07318" stroke="#387FD2"  />
</g>
</svg>

              </div>
              <WorkStepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
