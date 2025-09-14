import { AboutUs } from "@/components/ui/landing/about-us";
import Blog from "@/components/ui/landing/Blog";
import Contact from "@/components/ui/landing/Contact";
import ExperticeService from "@/components/ui/landing/ExperticeService";
import { FAQ } from "@/components/ui/landing/faq";
import Footer from "@/components/ui/landing/footer";

import { Header } from "@/components/ui/landing/header";
import { Hero } from "@/components/ui/landing/hero";
import { HowItWorks } from "@/components/ui/landing/HowItWorks";
import { OurValue } from "@/components/ui/landing/OurValue";
import Portfolio from "@/components/ui/landing/Portfolio";
import { ServicesMarquee } from "@/components/ui/landing/services-marquee";
import ServicesOffer from "@/components/ui/landing/ServicesOffer";

import { Testimonials } from "@/components/ui/landing/Testimonials";
import TopHeader from "@/components/ui/landing/topHeader";
import WhatWeDo from "@/components/ui/landing/WhatWeDo";
import WhyChooseUs from "@/components/ui/landing/WhyChooseUs";
import WorkProcess from "@/components/ui/landing/WorkProcess";


export default function Home() {
  return (
    <main className="relative overflow-hidden">
   
      <TopHeader />
      <Header />
      <Hero />
      <ServicesMarquee />
      <AboutUs />
      <HowItWorks />
      <ServicesOffer />
      <OurValue />
      <WhyChooseUs />
      <WorkProcess />
      <WhatWeDo />
      <ExperticeService/>
      <Portfolio />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <Contact />
      <Blog />
      {/* <CallToAction /> */}
      <Footer />
    </main>
  );
}