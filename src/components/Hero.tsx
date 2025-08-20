import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,255,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
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
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
            <span className="bg-gradient-to-r from-white via-[#7FFF00] to-white bg-clip-text text-transparent">
              AMARDEEP
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#7FFF00] via-white to-[#7FFF00] bg-clip-text text-transparent">
              KUMAR
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light tracking-wider">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="inline-block mr-4"
            >
              Developer
            </motion.span>
            <span className="text-[#7FFF00]">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="inline-block mx-4"
            >
              Designer
            </motion.span>
            <span className="text-[#7FFF00]">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="inline-block ml-4"
            >
              Programmer
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-handwriting"
          >
            Building scalable, user-centric solutions with modern web technologies and innovative design
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(127, 255, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5EDD00] to-[#7FFF00]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "#contact", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ 
                scale: 1.2, 
                color: '#7FFF00',
                rotate: 360
              }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-[#7FFF00] p-3 rounded-full border border-gray-700 hover:border-[#7FFF00] transition-all duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-[#7FFF00] w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;