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
  const extendedServices = [...services, ...services]; // Duplicate for seamless loop

  return (
    <div className="w-full bg-brand-light-blue py-4 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {extendedServices.map((service, index) => (
            <div key={index} className="mx-4 flex items-center justify-center gap-3 rounded-lg bg-white p-4 shadow-md">
              {service.icon}
              <span className="text-base font-bold text-brand-secondary">{service.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee whitespace-nowrap">
           {extendedServices.map((service, index) => (
            <div key={index} className="mx-4 flex items-center justify-center gap-3 rounded-lg bg-white p-4 shadow-md">
              {service.icon}
              <span className="text-base font-bold text-brand-secondary">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}