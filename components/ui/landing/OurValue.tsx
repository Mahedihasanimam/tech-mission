import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, Leaf, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <BookOpenCheck className="w-8 h-8 text-brand-primary" />,
    title: "Islamic Ethics",
    description: "We adhere to Islamic principles in all our operations, ensuring fairness, transparency, and social responsibility.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Sustainability",
    description: "We are committed to developing sustainable solutions that minimize environmental impact and promote long-term well-being.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovation",
    description: "We constantly seek new and improved ways to serve our clients and contribute to technological advancement.",
  },
];

export function OurValue() {
  return (
    <section className="py-12 lg:py-24 bg-brand-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway text-[#072D5B]">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600">Core Beliefs and Guiding Principles</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-left p-4 bg-[#FBFBFB] border border-[#CFE8DE]">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                {value.icon}
                <CardTitle className="text-2xl font-bold text-[#072D5B] ">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}