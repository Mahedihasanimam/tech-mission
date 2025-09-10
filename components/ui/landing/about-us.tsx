import { PhoneCall } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="/about-us-image.svg" // Replace with your image
              alt="About Us" 
              className="w-full max-w-md rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway">About Us</h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 font-lato">One of the Fastest Way to Business Growth</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-lg flex items-center gap-6">
              <div className="bg-brand-primary p-4 rounded-full">
                <PhoneCall className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-brand-primary font-raleway">Get Instant Professional Advice</p>
                <p className="text-base text-gray-800">Ready to Help : <span className="font-bold">+1 356 678 7897</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}