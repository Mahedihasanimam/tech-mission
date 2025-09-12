'use client';
import { useRef, useEffect, useState } from 'react';
import { Code, Brush, BrainCircuit, Megaphone, ShieldCheck, Briefcase } from 'lucide-react';

const services = [
  { name: 'Design', icon: <Brush className="h-6 w-6" /> },
  { name: 'Development', icon: <Code className="h-6 w-6" /> },
  { name: 'AI', icon: <BrainCircuit className="h-6 w-6" /> },
  { name: 'Marketing', icon: <Megaphone className="h-6 w-6" /> },
  { name: 'Cybersecurity', icon: <ShieldCheck className="h-6 w-6" /> },
  { name: 'Consultancy', icon: <Briefcase className="h-6 w-6" /> },
];

export function ServicesMarquee() {
  const marqueeRef = useRef(null);
  const [marqueeItems, setMarqueeItems] = useState<any[]>([]);

  // Duplicate items for seamless loop
  useEffect(() => {
    setMarqueeItems([...services, ...services]);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8 overflow-hidden relative">
     
      
      {/* Marquee container with gradient fades */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>
        
        {/* Marquee track */}
        <div 
          ref={marqueeRef}
          className="flex animate-marquee whitespace-nowrap"
          style={{ 
            animation: 'marquee 30s linear infinite',
            width: 'fit-content'
          }}
        >
          {marqueeItems.map((service, index) => (
            <div 
              key={index} 
              className="mx-3 flex items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-blue-600">
                {service.icon}
              </div>
              <span className="text-base font-semibold text-gray-800">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom animation style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}