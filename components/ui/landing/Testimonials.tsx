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
import { Quote } from "lucide-react";

const testimonials = [
    { name: "Samuel Karl", title: "CEO, Innovate Inc.", quote: "Tech Mission transformed our digital presence. Their expertise and dedication are unmatched. The results exceeded all our expectations.", avatar: "/avatars/avatar1.jpg" },
    { name: "Daria Linney", title: "Founder, Creative Solutions", quote: "Working with their team was a pleasure. They are professional, responsive, and delivered a product that our users love.", avatar: "/avatars/avatar2.jpg" },
    { name: "John Carter", title: "Marketing Director, Growth Co.", quote: "An incredible partner for any business looking to scale. Their insights and strategies have been invaluable to our growth.", avatar: "/avatars/avatar3.jpg" }
];

export function Testimonials() {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway">From Our Customers</h2>
          <p className="mt-4 text-lg text-gray-600">See what our clients have to say about us</p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-brand-background border-l-4 border-brand-primary">
                    <CardContent className="flex flex-col items-center text-center p-8 gap-6">
                      <Quote className="w-10 h-10 text-brand-primary/50" />
                      <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
                      <div className="flex flex-col items-center">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2 object-cover" />
                        <h4 className="font-bold text-brand-primary">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
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