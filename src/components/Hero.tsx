import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Hero1 from "@/assets/background.webp";
import Hero2 from "@/assets/background-2.webp";
import Hero3 from "@/assets/background-3.webp";
import Hero4 from "@/assets/background-4.webp";

type Slide = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const slides: Slide[] = [
  {
    image: Hero1,
    title: "Slide 1 Title",
    description: "This is the description for Slide 1.",
    link: "/learn-more-1",
  },
  {
    image: Hero2,
    title: "Slide 2 Title",
    description: "This is the description for Slide 2.",
    link: "/learn-more-2",
  },
  {
    image: Hero3,
    title: "Slide 3 Title",
    description: "This is the description for Slide 3.",
    link: "/learn-more-3",
  },
  {
    image: Hero4,
    title: "Slide 4 Title",
    description: "This is the description for Slide 4.",
    link: "/learn-more-4",
  },
];

function HeroCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiper || !prevRef.current || !nextRef.current) return;

    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="container relative w-screen max-w-none overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        onSwiper={setSwiper}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-[115vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-4 sm:p-8 md:p-12">
                <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden px-2 text-center text-white sm:gap-5">
                  <h2 className="break-words text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
                    {slide.title}
                  </h2>
                  <p className="break-words text-sm text-white/90 sm:text-base md:text-lg">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-flex w-fit rounded-md border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    Learn more about {slide.title}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-black backdrop-blur-sm transition hover:bg-white/70"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-black backdrop-blur-sm transition hover:bg-white/70"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}

export default HeroCarousel;
