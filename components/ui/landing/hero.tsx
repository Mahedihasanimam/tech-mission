import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src="/hero-background.jpg" // Replace with your image in the /public folder
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-raleway">
          Make your Digital presence matter
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl">
          We are a full service technology and digital solutions company. Better Insights For Business Growth
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg">Our Services</Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}