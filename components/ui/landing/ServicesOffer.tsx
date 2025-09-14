"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "UX/UI",
    description:
      "At Tech Mission, our design team is passionate about creating intuitive, user-friendly interfaces that enhance user experience and drive engagement.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our developers build responsive, high-performance websites and web applications using the latest technologies and best practices.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mobile Apps",
    description:
      "We create cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Our marketing experts help you reach your target audience and grow your business through effective digital strategies.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description:
      "We provide scalable cloud infrastructure solutions to help your business grow without technical limitations.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our comprehensive analytics and visualization services.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our comprehensive analytics and visualization services.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our comprehensive analytics and visualization services.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our comprehensive analytics and visualization services.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our comprehensive analytics and visualization services.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
];

function ServicesOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine how many slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= services.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length, slidesToShow]);

  const goToSlide = (index: number) => {
    // Ensure index is within valid range
    const maxIndex = Math.max(0, services.length - slidesToShow);
    const clampedIndex = Math.min(Math.max(0, index), maxIndex);
    setCurrentIndex(clampedIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, services.length - slidesToShow);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, services.length - slidesToShow);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculate the slide width based on number of slides to show
  const slideWidth = 100 / slidesToShow;

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-blue-500 rounded-full opacity-20 transform translate-x-10 -translate-y-10 md:translate-x-16 md:-translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-pink-500 rounded-full opacity-20 transform -translate-x-8 translate-y-8 md:-translate-x-12 md:translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-blue-600 rounded-full opacity-20 transform translate-x-12 translate-y-12 md:translate-x-20 md:translate-y-20"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#072D5B] mb-4">
            Services We Offer
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored Solutions for Your Needs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile if only one slide shows */}
          {slidesToShow < services.length && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 -translate-x-2 md:-translate-x-4 hidden sm:flex"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 translate-x-2 md:translate-x-4 hidden sm:flex"
                onClick={nextSlide}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden mx-0 sm:mx-8" ref={carouselRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out mb-4"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
                width: `${services.length * (100 / slidesToShow)}%`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="px-2 sm:px-3 md:px-4"
                  style={{ width: `${slideWidth}%` }}
                >
                  
                  <div className="bg-white rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 h-full shadow-lg ">
                    {/* Number Badge */}
                   
                 
                      <button
                        className="cursor-pointer  absolute top-2 right-0"
                        aria-label="Learn more"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 58 56"
                          fill="none"
                          className="w-8 h-8 md:w-10 md:h-10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M57.5 29.7943C57.5 35.7421 57.5 38.7159 57.5 44.6636C55.75 48 52.959 49.8577 47.75 53C41.25 55 36.75 55.5 30.6292 55.2523C24.7403 54.4529 19.1555 52.1541 14.4102 48.5765C9.6648 44.9989 5.91795 40.2623 3.52878 34.8208C1.13962 29.3793 0.188232 23.4153 0.76583 17.5006C1.34343 11.5858 4.35325 4.93214 7.75 0.0556641C13.6977 0.0556641 13.8833 0.0556641 20.3267 0.0556641H51.0566C48.2322 1.42457 22.0552 7.82416 20.2612 10.3996C18.4673 12.975 17.365 15.968 17.06 19.0918C16.7549 22.2155 17.2574 25.3652 18.5191 28.239C19.7809 31.1129 21.7598 33.6144 24.2659 35.5038C26.7721 37.3933 29.7216 38.6073 32.8316 39.0295C35.9417 39.4518 39.1081 39.068 42.0273 37.9152C44.9465 36.7623 47.5206 34.8789 49.5029 32.4455C51.4853 30.0121 46.3659 20.667 46.9047 17.5749L39.25 3.62186L51.0566 0.0556641C51.0566 0.0556641 51.9752 0.323982 52.5435 0.551308C53.3472 0.872796 53.826 1.03346 54.5261 1.5426C55.1903 2.02561 56.013 3.02953 56.013 3.02953C56.013 3.02953 56.7076 4.19891 57.0043 5.01211C57.2779 5.76183 57.5 6.99468 57.5 6.99468V13.9337V29.7943Z"
                            fill="#D9D9D9"
                            fillOpacity="0.3"
                          />
                          <rect
                            x="12.4805"
                            y="2.05566"
                            width="41.6341"
                            height="41.6341"
                            rx="20.8171"
                            fill="#1A202C"
                          />
                          <g clipPath="url(#clip0_519_2306)">
                            <path
                              d="M39.4804 18.1057C39.4804 17.8404 39.3751 17.5861 39.1875 17.3986C39 17.211 38.7456 17.1057 38.4804 17.1057L30.4804 17.0557C30.2152 17.0557 29.9608 17.161 29.7733 17.3486C29.5858 17.5361 29.4804 17.7904 29.4804 18.0557C29.4804 18.3209 29.5858 18.5752 29.7733 18.7628C29.9608 18.9503 30.2152 19.0557 30.4804 19.0557H36.0404L27.7704 27.3457C27.6767 27.4386 27.6023 27.5492 27.5515 27.6711C27.5007 27.7929 27.4746 27.9237 27.4746 28.0557C27.4746 28.1877 27.5007 28.3184 27.5515 28.4402C27.6023 28.5621 27.6767 28.6727 27.7704 28.7657C27.8634 28.8594 27.974 28.9338 28.0958 28.9846C28.2177 29.0353 28.3484 29.0615 28.4804 29.0615C28.6124 29.0615 28.7431 29.0353 28.865 28.9846C28.9868 28.9338 29.0974 28.8594 29.1904 28.7657L37.4804 20.4757V26.0557C37.4804 26.3209 37.5858 26.5752 37.7733 26.7628C37.9608 26.9503 38.2152 27.0557 38.4804 27.0557C38.7456 27.0557 39 26.9503 39.1875 26.7628C39.3751 26.5752 39.4804 26.3209 39.4804 26.0557V18.1057Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_519_2306">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(21.4805 11.0557)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
               

                    {/* Content */}
                    <div className=" p-5 md:p-6 lg:p-8  flex flex-col">
                       <svg
                        width="71"
                        height="70"
                        viewBox="0 0 71 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.75"
                          y="0.5"
                          width="69"
                          height="69"
                          rx="5.5"
                          fill="url(#paint0_linear_519_2293)"
                        />
                        <rect
                          x="0.75"
                          y="0.5"
                          width="69"
                          height="69"
                          rx="5.5"
                          fill="url(#paint1_linear_519_2293)"
                          fill-opacity="0.2"
                        />
                        <rect
                          x="0.75"
                          y="0.5"
                          width="69"
                          height="69"
                          rx="5.5"
                          stroke="url(#paint2_linear_519_2293)"
                        />
                        <g clip-path="url(#clip0_519_2293)">
                          <path
                            d="M20.25 47.0379C20.25 48.2132 20.5061 48.9214 21.6211 49.4637C24.1975 50.5786 27.7534 51.317 32.0173 51.317C36.2361 51.317 40.9821 50.6842 44.3872 49.0268C46.1953 48.1679 46.6322 47.3694 46.6322 45.5011V22.3733C46.6322 19.9325 45.5475 18.8175 43.197 18.8175H41.7807V18.2148C41.7807 16.7232 41.0274 16 39.7014 16C39.2494 16 38.7071 16.1055 38.0592 16.3164C33.5089 17.808 29.3504 18.7573 24.0167 18.7573H22.8114C21.1842 18.7573 20.25 19.7065 20.25 21.183V47.0379ZM25.5988 30.178V25.0854C25.5988 24.8744 25.7494 24.6936 25.9604 24.6786C29.471 24.543 32.6049 23.9252 35.8142 22.75C35.995 22.6747 36.3114 22.75 36.3114 23.1116V28.4302C36.3114 28.5659 36.2361 28.7015 36.1004 28.7466C33.2979 29.8918 29.6066 30.5396 25.9604 30.5396C25.7645 30.5396 25.5988 30.419 25.5988 30.178ZM26.3672 48.7405C32.2885 48.5747 37.7879 46.9174 40.7712 44.6422C41.4643 44.115 41.7807 43.5725 41.7807 42.2467V21.2433H43.2121C43.875 21.2433 44.2065 21.6049 44.2065 22.3733V45.3354C44.2065 46.2394 44.0708 46.5708 43.2121 46.9475C40.2137 48.2583 35.995 49.1021 32.0173 49.1021C30.1189 49.1021 28.3259 48.9967 26.3672 48.7405Z"
                            fill="#195296"
                            fill-opacity="0.95"
                          />
                          <path
                            d="M20.25 47.0379C20.25 48.2132 20.5061 48.9214 21.6211 49.4637C24.1975 50.5786 27.7534 51.317 32.0173 51.317C36.2361 51.317 40.9821 50.6842 44.3872 49.0268C46.1953 48.1679 46.6322 47.3694 46.6322 45.5011V22.3733C46.6322 19.9325 45.5475 18.8175 43.197 18.8175H41.7807V18.2148C41.7807 16.7232 41.0274 16 39.7014 16C39.2494 16 38.7071 16.1055 38.0592 16.3164C33.5089 17.808 29.3504 18.7573 24.0167 18.7573H22.8114C21.1842 18.7573 20.25 19.7065 20.25 21.183V47.0379ZM25.5988 30.178V25.0854C25.5988 24.8744 25.7494 24.6936 25.9604 24.6786C29.471 24.543 32.6049 23.9252 35.8142 22.75C35.995 22.6747 36.3114 22.75 36.3114 23.1116V28.4302C36.3114 28.5659 36.2361 28.7015 36.1004 28.7466C33.2979 29.8918 29.6066 30.5396 25.9604 30.5396C25.7645 30.5396 25.5988 30.419 25.5988 30.178ZM26.3672 48.7405C32.2885 48.5747 37.7879 46.9174 40.7712 44.6422C41.4643 44.115 41.7807 43.5725 41.7807 42.2467V21.2433H43.2121C43.875 21.2433 44.2065 21.6049 44.2065 22.3733V45.3354C44.2065 46.2394 44.0708 46.5708 43.2121 46.9475C40.2137 48.2583 35.995 49.1021 32.0173 49.1021C30.1189 49.1021 28.3259 48.9967 26.3672 48.7405Z"
                            fill="#1963B9"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_519_2293"
                            x1="35.25"
                            y1="0"
                            x2="35.25"
                            y2="70"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#D2C8FF" />
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_519_2293"
                            x1="162.523"
                            y1="-69.6023"
                            x2="0.250007"
                            y2="70"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.224072" stop-color="#1A00FF" />
                            <stop
                              offset="0.696783"
                              stop-color="#9EFF00"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_519_2293"
                            x1="35.25"
                            y1="0"
                            x2="35.25"
                            y2="70"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white" />
                            <stop
                              offset="1"
                              stop-color="#5732DA"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <clipPath id="clip0_519_2293">
                            <rect
                              width="34.3822"
                              height="35.3321"
                              fill="white"
                              transform="translate(16.25 16)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="text-lg md:text-xl pt-2 font-bold text-gray-900 mb-3 md:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-grow">
                        {service.description}
                      </p>

                      {/* Read More Link */}
                      <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group mt-auto text-sm md:text-base">
                        Read More
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({
              length: Math.max(1, services.length - slidesToShow + 1),
            }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation buttons */}
          {slidesToShow < services.length && (
            <div className="flex justify-center mt-6 space-x-4 sm:hidden">
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-lg hover:bg-gray-50"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-lg hover:bg-gray-50"
                onClick={nextSlide}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesOffer;
