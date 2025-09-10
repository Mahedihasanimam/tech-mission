import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    id: "item-1",
    question: "What services does Tech Mission provide?",
    answer: "Tech Mission offers a wide range of services including web development, app development, UI/UX design, AI solutions, digital marketing, cybersecurity, and technology consultancy."
  },
  {
    id: "item-2",
    question: "How can Tech Mission help my business?",
    answer: "We help businesses grow by building a strong digital presence, creating user-friendly products, and implementing effective marketing strategies. Our solutions are tailored to meet your unique goals and challenges."
  },
  {
    id: "item-3",
    question: "What industries does Tech Mission work with?",
    answer: "We work with a diverse range of industries, including e-commerce, healthcare, finance, education, and more. Our team has the expertise to adapt to the specific needs of any sector."
  },
  {
    id: "item-4",
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. After our initial consultation, we will provide a detailed project plan with estimated timelines for each phase."
  }
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-secondary font-raleway">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Still have questions? Contact our team at <a href="mailto:hello@techmission.com" className="text-brand-primary underline">hello@techmission.com</a>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl pt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}