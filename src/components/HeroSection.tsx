"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_INTERVAL = 15000; // 15 seconds
const BLUE_SHADE = "blue-600"; // Consistent blue shade

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070",
    title: "Biblical Teaching",
    intro: "Transforming believers into mature disciples through Christ-centered teachings.",
    cta: "Donate",
  },
  {
    image: "/empower.jpg",
    title: "Economic Empowerment",
    intro: "Cultivating profitable stewards by developing God-given talents and resources.",
    cta: "Donate",
  },
  {
    image: "/leader.jpg",
    title: "Equipping Ministry Leaders",
    intro: "Strengthening church workers with skills in organization and governance.",
    cta: "Donate",
  },
  {
    image: "/child.jpg",
    title: "Discipleship",
    intro: "Equipping disciples to fulfill the Great Commission with Christ-centered partners.",
    cta: "",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ConferenceBanner = () => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    className={`bg-gradient-to-r from-${BLUE_SHADE} to-blue-800 text-white p-3 rounded-lg mb-6 md:mb-8`}
  >
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-center space-x-3">
        <Calendar className="h-4 w-4 text-blue-200" />
        <div>
          <p className="text-sm font-medium text-blue-100">Transforming Faith Conference 2025</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-blue-200" />
          <span className="text-sm text-blue-100">Nairobi, Kenya</span>
        </div>
      </div>
      <Link
        href="#Conference"
        className="px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors scroll-smooth"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [autoplay, nextSlide]);

  // Ensure smooth scrolling behavior for links to #Hero
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#Hero") {
      const element = document.getElementById("Hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main>
      <section className="relative w-full min-h-[95vh] bg-background overflow-hidden" id="Hero">
        {/* Background Image with AnimatePresence for slide transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide} // Key ensures animation on slide change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[currentSlide].image}
              alt={SLIDES[currentSlide].title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={currentSlide === 0}
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="relative z-10 min-h-[95vh] flex flex-col md:flex-row items-center justify-between p-6 md:p-12"
        >
          {/* Left Side: Static Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="max-w-xl">
              <ConferenceBanner />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Godly Wisdom Ministry
              </h1>
              <p className="text-base md:text-lg text-white mb-8">
                Growing in faith, talent, and service through Christ-centered education
              </p>
            </div>
          </div>

          {/* Right Side: Program Box */}
          <div className="w-full md:w-1/2 flex justify-end">
            <div className={`max-w-md w-full p-6 border-2 border-${BLUE_SHADE} bg-white/90 rounded-lg shadow-lg`}>
              <h2 className={`text-2xl font-bold text-${BLUE_SHADE} mb-3`}>
                {SLIDES[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">{SLIDES[currentSlide].intro}</p>
              <Link
                href="#Programs"
                className={`inline-flex items-center justify-center px-4 py-2 bg-${BLUE_SHADE} text-white rounded-md font-semibold hover:bg-blue-700 transition-colors scroll-smooth`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-6 left-6 z-20 flex items-center gap-4"
        >
          <button
            onClick={() => {
              previousSlide();
              setAutoplay(false);
            }}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-${BLUE_SHADE} text-${BLUE_SHADE} hover:bg-${BLUE_SHADE} hover:text-white transition-colors`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-${BLUE_SHADE} text-${BLUE_SHADE} hover:bg-${BLUE_SHADE} hover:text-white transition-colors`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}