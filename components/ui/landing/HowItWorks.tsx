import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PenTool, Code, TestTube2 } from "lucide-react";
import React from "react";

const processSteps = [
  {
    icon: <Search className="w-10 h-10 text-brand-primary" />,
    title: "Research",
    description: "We start by understanding your business, audience, and goals to build a solid foundation.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-brand-primary" />,
    title: "Design",
    description: "Our team creates intuitive and beautiful user interfaces that provide an exceptional user experience.",
  },
  {
    icon: <Code className="w-10 h-10 text-brand-primary" />,
    title: "Develop",
    description: "We bring designs to life with clean, efficient, and scalable code using the latest technologies.",
  },
  {
    icon: <TestTube2 className="w-10 h-10 text-brand-primary" />,
    title: "Test",
    description: "Rigorous testing ensures your product is bug-free, performant, and ready for launch.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 lg:py-24 bg-brand-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway">How Tech Mission Works For You</h2>
        <p className="mt-4 text-lg text-gray-600">Empowering Your Success Through Innovation</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center group hover:border-brand-primary hover:shadow-lg transition-all">
              <CardHeader className="items-center">
                <div className="bg-blue-100 p-5 rounded-full group-hover:bg-brand-primary transition-colors">
                  {React.cloneElement(step.icon, { className: "w-10 h-10 text-brand-primary group-hover:text-white transition-colors" })}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl font-bold">{step.title}</CardTitle>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}