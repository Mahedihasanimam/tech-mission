import React from 'react';

// Data for the feature cards, including new SVG icons. This keeps the component clean and easy to update.
const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
    ),
    title: "Web Development",
    description: "We build modern, responsive, and scalable web applications tailored to your business needs, ensuring a seamless user experience across all devices."
  },
  {
    icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: "Mobile App Development",
    description: "From iOS to Android, we create intuitive and high-performance mobile apps that engage your users and drive business growth on the go."
  },
  {
    icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
    title: "UI/UX Design",
    description: "Our design team crafts visually stunning and user-friendly interfaces that enhance usability and create memorable digital experiences for your audience."
  },
  {
    icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
    title: "Cloud Solutions",
    description: "We provide robust cloud infrastructure and deployment services to ensure your applications are secure, scalable, and always available to your users worldwide."
  }
];

// Reusable component for each service card
const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-5">
            <div className="flex-shrink-0 p-4 bg-[#4089E0] rounded-lg">
                {icon}
            </div>
            <h3 className="flex-1 text-2xl font-medium text-gray-900">
                {title}
            </h3>
        </div>
        <p className="text-lg text-gray-600">
            {description}
        </p>
    </div>
);

function WorkProcess() {
  return (
    <div style={{backgroundImage: "url('/whatwedo.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "40px"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header section */}
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#072D5B] tracking-tight">
                    What We Do
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    We specialize in creating bespoke digital solutions that empower businesses to succeed in an ever-evolving technological landscape.
                </p>
            </div>

            {/* Responsive grid for services, mirroring the layout of the WhyChooseUs component */}
            <div className="mx-auto max-w-6xl border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            // Add borders to create the grid effect
                            className={`p-8 sm:p-12 
                                ${index < 2 ? 'border-b' : ''} 
                                ${index % 2 === 0 ? 'md:border-r' : ''} 
                                border-gray-200`}
                        >
                            <ServiceCard 
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default WorkProcess;
