import { AboutUs } from "@/components/ui/landing/about-us";
import { Contact } from "@/components/ui/landing/Contact";
import { FAQ } from "@/components/ui/landing/faq";
import { Footer } from "@/components/ui/landing/footer";
import { Header } from "@/components/ui/landing/header";
import { Hero } from "@/components/ui/landing/hero";
import { HowItWorks } from "@/components/ui/landing/HowItWorks";
import { OurValue } from "@/components/ui/landing/OurValue";
import { ServicesMarquee } from "@/components/ui/landing/services-marquee";
import { ServicesOffer } from "@/components/ui/landing/ServicesOffer";
import { Testimonials } from "@/components/ui/landing/Testimonials";
import TopHeader from "@/components/ui/landing/topHeader";


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
      {/* <WhyChooseUs /> */}
      {/* <WhatWeDo /> */}
      {/* <Expertise /> */}
      {/* <Portfolio /> */}
      {/* <Team /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      {/* <Blog /> */}
      {/* <CallToAction /> */}
      <Footer />
    </main>
  );
}