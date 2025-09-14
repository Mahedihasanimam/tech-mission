import React, { JSX } from 'react';

// Define the type for a single portfolio item
type PortfolioItem = {
  src: string;
  alt: string;
  colSpan: string; // Tailwind class for column span (e.g., 'lg:col-span-2')
  rowSpan: string; // Tailwind class for row span
};

// Data for portfolio items, making it easy to manage the gallery
const portfolioItems: PortfolioItem[] = [
  {
    src: '/portfolio1.png',
    alt: 'Description of project 1',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
  },
  {
     src: '/portfolio2.png',
    alt: 'Description of project 2',
    colSpan: 'col-span-1',
    rowSpan: 'md:row-span-2',
  },
  {
    src: '/portfolio3.png',
    alt: 'Description of project 3',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    src: '/portfolio2.png',
    alt: 'Description of project 4',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
    {
    src: '/portfolio1.png',
    alt: 'Description of project 5',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
  },
];


function Portfolio(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-lato font-semibold text-2xl text-blue-600">
            \\ Portfolio \\
          </h2>
          <p className="font-raleway font-bold text-4xl text-[#0B4D99] mt-2">
            Our Work
          </p>
        </div>

        {/* Responsive Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6 h-[60rem]">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`${item.colSpan} ${item.rowSpan}`}>
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#106CD8] text-white font-lato font-semibold text-xl px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
