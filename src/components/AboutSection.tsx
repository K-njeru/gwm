'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function App() {
  return (
    <section className="relative py-16 min-h-screen bg-neutral-200">
      <svg
        className="absolute top-0 left-0 right-0 w-full text-blue-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 640"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,640L48,608C96,576,192,512,288,480C384,448,480,448,576,426.7C672,405,768,363,864,362.7C960,363,1056,405,1152,416C1248,427,1344,405,1392,394.7L1440,384L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-700">Our Kingdom Assignment</h2>
        <div className="w-64 h-1 bg-blue-600 rounded-full mb-6 mx-auto"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants}
            className="transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl md:mt-12">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Christ, the Wisdom of God
                <span className="block mt-2 text-blue-200">
                  – our true North, guiding every step we take and shaping every life we touch.
                </span>
              </h3>
              <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants}
            className="transform hover:scale-105 transition-transform duration-300 relative flex flex-col justify-between items-baseline rounded-2xl p-8 shadow-lg text-white max-h-fit md:mt-20 md:-mb-8">
              <Image
                src="/church.jpg"
                alt="Church background"
                fill
                className="rounded-2xl object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent rounded-2xl"></div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <p className="mb-0">
                  Godly wisdom isn&apos;t just taught here—it&apos;s lived, shared, and multiplied through real lives with real impact.
                </p>
              </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants}
             className="transform hover:scale-105 transition-transform duration-300 relative flex flex-col justify-between rounded-2xl p-8 shadow-lg text-white">
              <Image
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070"
                alt="Community background"
                fill
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Community</h3>
                <p className="text-blue-50 mb-6">
                  Discover the heart of Godly Wisdom Ministry—where faith grows, lives are discipled, and Christ remains our true North.
                </p>
                <Link
                  href="/about"
                  className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-transparent hover:text-blue-500 hover:border-2 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <MoveUpRight className="w-5 h-5" />
                </Link>
              </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={cardVariants}
             className="relative transform hover:scale-105 transition-transform duration-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 md:mt-12 overflow-hidden">
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We are a discipleship-driven Christian ministry based in Nairobi, walking
                    alongside believers on their journey to spiritual maturity and Kingdom impact.
                    Since 2013, we&apos;ve been nurturing fruitfulness through Scripture-based teachings,
                    economic empowerment, and leadership development.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Inspired by Titus 1:1 and the call to godliness, we help believers live wisely,
                    lead humbly, and serve passionately.
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-sm text-blue-600 font-semibold">Est. 2013</span>
                </div>
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
