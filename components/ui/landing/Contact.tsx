import React from 'react';

// Reusable component for contact information items
const ContactInfoItem = ({ icon, title, details }: any) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-raleway font-bold text-blue-600">{title}</h3>
      <div className="mt-1 text-base font-raleway font-medium text-gray-600">
        {details.map((line: string, index: number) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

// Reusable component for social media icons
const SocialIcon = ({ icon }: any) => (
  <a href="#" className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
    {icon}
  </a>
);

function Contact() {
  return (
    <section style={{backgroundImage: "url('/contactimg.png')", backgroundSize: "cover"}} className=" py-16 sm:py-24 font-raleway">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-raleway font-bold text-4xl text-[#072D5B]">
            Get In Touch
          </h2>
          <p className="font-lato font-semibold text-2xl text-gray-700 mt-2">
            Hey! Let’s Talk
          </p>
        </div>

        {/* Main content grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white/20 p-8 rounded-lg">
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-4 rounded-lg border bg-white "
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 rounded-lg border bg-white "
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full p-4 rounded-lg border bg-white "
              />
              <textarea 
                placeholder="Your Message" 
                rows={5}
                className="w-full p-4 rounded-lg border bg-white "
              ></textarea>
              <div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg flex flex-col gap-8">
            <ContactInfoItem 
              icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
              title="Call Anytime"
              details={["+ 91 23678 27867", "+ 91 67678 92878"]}
            />
             <ContactInfoItem 
              icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Send Email"
              details={["connect@itfirms.com", "hello@itfirms.com"]}
            />
             <ContactInfoItem 
              icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Visit Us"
              details={["20 Island Park Road,", "New Jearsy, New York, USA"]}
            />
            
            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-raleway font-bold text-blue-600 text-center">Follow us</h3>
                <div className="flex justify-center gap-4 mt-4">
                    <SocialIcon icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>} />
                    <SocialIcon icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>} />
                    <SocialIcon icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>} />
                    <SocialIcon icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.218 3.803 4.659-.757.205-1.549.233-2.324.088.632 1.956 2.448 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.482 0-.96-.028-1.431-.082 2.684 1.723 5.875 2.732 9.309 2.732 11.164 0 17.27-9.256 17.27-17.27 0-.262-.006-.522-.018-.781.98-.703 1.83-1.575 2.508-2.589z"/></svg>} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
