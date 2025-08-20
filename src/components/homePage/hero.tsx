"use client"; // if you're in Next.js app router
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import HeroSlide from "./heroSlide";
import { SlideData } from "./types";

export default function Hero() {
  const slides: SlideData[] = [
    {
      id: 1,
      title: "Heritage & Excellence",
      description: "Crafting timeless solutions with refined precision and traditional craftsmanship",
      image: "/images/hero-1.jpg",
      button: {
        text: "Discover Legacy",
        href: "/about"
      }
    },
    {
      id: 2,
      title: "Distinguished Innovation",
      description: "Where classical elegance meets modern sophistication in every detail",
      image: "/images/hero-1.jpg",
      button: {
        text: "Our Expertise",
        href: "/services"
      }
    },
    {
      id: 3,
      title: "Timeless Mastery",
      description: "Preserving tradition while embracing the finest in contemporary excellence",
      image: "/images/hero-1.jpg",
      button: {
        text: "View Collection",
        href: "/products"
      }
    }
  ];

  return (
    <div id="hero" className="w-full min-h-screen relative overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{ delay: 8000 }}
        speed={2500}
        loop
        className="h-screen"
      >
        {/* Elegant Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-8 top-[85%] transform -translate-y-1/2 z-20 w-14 h-14 bg-stone-50/80 border border-stone-300 hover:bg-stone-100/90 transition-luxury backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg group">
          <svg className="w-6 h-6 text-stone-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-8 top-[85%] transform -translate-y-1/2 z-20 w-14 h-14 bg-stone-50/80 border border-stone-300 hover:bg-stone-100/90 transition-luxury backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg group">
          <svg className="w-6 h-6 text-stone-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
