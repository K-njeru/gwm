"use client"; // Mark this as a client-side component

import { motion } from "framer-motion";
import { Construction, Rocket } from "lucide-react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Animated Construction Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="mb-8"
      >
        <Construction className="w-24 h-24 text-yellow-500 dark:text-yellow-400" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4"
      >
        Under Construction
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl"
      >
        Oops! The page you&apos;re looking for is still under construction. We&apos;re working hard to bring it to you soon. Stay tuned!
      </motion.p>

      {/* Rocket Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>Go Back Home</span>
          <Rocket className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Custom404;