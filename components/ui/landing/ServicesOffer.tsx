"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Palette, Layers, CodeXml, Shield, BarChart, BrainCircuit } from "lucide-react";

const services = [
    { title: "UX/UI Design", description: "Creating intuitive and visually stunning user experiences.", icon: <Palette/> },
    { title: "Web Development", description: "Building responsive and high-performance websites.", icon: <CodeXml/> },
    { title: "App Development", description: "Developing native and cross-platform mobile applications.", icon: <Layers/> },
    { title: "Cybersecurity", description: "Protecting your digital assets from threats and vulnerabilities.", icon: <Shield/> },
    { title: "AI Integration", description: "Leveraging artificial intelligence to automate and innovate.", icon: <BrainCircuit/> },
    { title: "Digital Marketing", description: "Driving growth with data-driven marketing strategies.", icon: <BarChart/> }
];

export function ServicesOffer() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway">Services We Offer</h2>
          <p className="mt-4 text-lg text-gray-600">Tailored Solutions for Your Needs</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full group hover:bg-brand-primary transition-colors">
                    <CardContent className="flex flex-col items-center text-center p-8 gap-4">
                        <div className="text-brand-primary group-hover:text-white transition-colors">
                            {React.cloneElement(service.icon, { className: "w-12 h-12" })}
                        </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">{service.title}</h3>
                      <p className="text-gray-600 group-hover:text-gray-200">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}