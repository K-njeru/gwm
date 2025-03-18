"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"; // Import ChevronDown
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
    image: "/economic.jpg",
    title: "Economic Empowerment",
    intro: "Cultivating profitable stewards by developing God-given talents and resources.",
    cta: "Donate",
  },
  {
    image: "/church.jpg",
    title: "Equipping Ministry Leaders",
    intro: "Strengthening church workers with skills in organization and governance.",
    cta: "Donate",
  },
  {
    image: "/Discipleship.jpg",
    title: "Discipleship",
    intro: "Equipping disciples to fulfill the Great Commission with Christ-centered partners.",
    cta: "",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

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
          className="relative z-10 min-h-[95vh] flex flex-col md:flex-row items-center justify-center p-6 md:p-12"
        >
          {/* Left Side: Empty Space (for medium screens and above) */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Right Side: Program Box */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className={`max-w-md w-full flex flex-col items-center justify-center p-6 border-2 border-blue-600 rounded-lg shadow-lg`}
            >
              <p className="text-sm text-white mb-6">GODLY WISDOM MINISTRY</p>
              <h2 className={`text-5xl font-bold text-white mb-3`}>
                {SLIDES[currentSlide].title}
              </h2>
              <p className="text-base italic tracking-[.04em] text-white mb-6">{SLIDES[currentSlide].intro}</p>
              <Link
                href="#Programs"
                className={`w-fit inline-flex items-center justify-center px-4 py-2 bg-${BLUE_SHADE} text-white rounded-md font-semibold hover:bg-blue-700 transition-colors scroll-smooth`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        {/* Left Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
        >
          <button
            onClick={() => {
              previousSlide();
              setAutoplay(false);
            }}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-${BLUE_SHADE} text-white hover:bg-${BLUE_SHADE} hover:text-white transition-colors`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Right Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
        >
          <button
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-${BLUE_SHADE} text-white hover:bg-${BLUE_SHADE} hover:text-white transition-colors`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Animated Arrow Down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <Link href="#Programs" className="flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }} // Bounce animation
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8 text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}