import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      
      {/* ✅ BACKGROUND (FORCED BEHIND) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7FFF00] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* ✅ CONTENT (FORCED ABOVE EVERYTHING) */}
      <div className="relative z-50 text-center px-4">

        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="text-white">AMARDEEP</span><br />
          <span className="text-[#7FFF00]">KUMAR</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Building scalable, user-centric solutions
        </p>

        {/* ✅ GUARANTEED WORKING BUTTON */}
        <button
          onClick={() => {
            window.location.href = "";
          }}
          className="bg-[#7FFF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition cursor-pointer"
        >
          Explore My Work
        </button>

      </div>

      {/* SCROLL ICON */}
      <ChevronDown className="absolute bottom-6 text-[#7FFF00] animate-bounce z-50" />
    </section>
  );
};

export default Hero;
