'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const programs = [
  {
    title: 'Biblical Teaching',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070',
    description: 'Grow from spiritual infancy to maturity through Christ-centered, life-transforming teachings.',
    link: '/programs/biblical-teaching',
  },
  {
    title: 'Economic Empowerment',
    image: '/economic.jpg',
    description: 'Empowering believers with tools and training to thrive as stewards in God’s Kingdom.',
    link: '/programs/economic-empowerment',
  },
  {
    title: 'Discipleship',
    image: '/Discipleship.jpg',
    description: 'Raising committed followers of Christ through study, mentorship, and practical faith.',
    link: '/programs/discipleship',
  },
  {
    title: 'Equipping Leaders',
    image: '/church.jpg',
    description: 'Strengthening church leaders with skills in governance, administration, and ministry strategy.',
    link: '/programs/equipping-leaders',
  },
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="relative py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-200 h-1/2 z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-700">Ministry Through His Design</h2>
        <div className="w-64 h-1 bg-blue-600 rounded-full mb-6 mx-auto"></div>

        {/* Program Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }} // ⬆️ from the top
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }} // ⬆️ back to top on exit (optional)
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: 'easeInOut', // Smooth entry and exit
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <div className="h-48 relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill 
                  className="rounded-t-xl object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <Link href={program.link} className="text-blue-600 hover:underline font-medium text-sm">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;