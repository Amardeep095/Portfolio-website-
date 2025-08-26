import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Star } from 'lucide-react';
import image from './comp/image.jpg'


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'C++', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'JavaScript', level: 87 },
    { name: 'HTML/CSS', level: 90 }
  ];

  const achievements = [
    { icon: Code, value: '15+', label: 'Projects Completed' },
    { icon: Star, value: '4.9', label: 'Client Rating' },
    { icon: Zap, value: '3+', label: 'Years Experience' },
    { icon: Palette, value: '15+', label: 'UI/UX Designs' }
  ];

  // GitHub-style contribution data (simplified)
  const generateContributions = () => {
    const contributions = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        contributions.push({
          week,
          day,
          level: Math.floor(Math.random() * 5)
        });
      }
    }
    return contributions;
  };

  const contributions = generateContributions();

  return (
    <section id="about" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#7FFF00] to-white bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7FFF00] to-transparent mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Neon glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] blur-xl opacity-20"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] blur-md opacity-40"></div>
            
            {/* Profile image placeholder */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black border-4 border-[#7FFF00] overflow-hidden ">
              <img 
                src={image}
                alt="Profile"
                className="w-full h-full object-cover transform -translate-x-10"

              />
            </div>

            {/* Floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#7FFF00] rounded-full"
                style={{
                  top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                  left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#7FFF00]">
              Computer Science Student & Full-Stack Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Motivated Computer Science student with a strong foundation in Web Development and 
              Data Structures & Algorithms. Skilled in C++, React, and Node.js, passionate about 
              building scalable, user-centric solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently pursuing BE in Computer Science at Chandigarh University, with hands-on 
              experience in full-stack development, modern frameworks, and emerging technologies 
              like IoT and cloud computing.
            </p>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#7FFF00]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] blur-sm opacity-50"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GitHub-style contribution grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-[#7FFF00]">
          Contribution Activity
        </h3>
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-52 gap-1 justify-center">
            {contributions.map((contrib, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.001 }}
                className={`w-3 h-3 rounded-sm ${
                  contrib.level === 0 ? 'bg-gray-800' :
                  contrib.level === 1 ? 'bg-[#7FFF00]/20' :
                  contrib.level === 2 ? 'bg-[#7FFF00]/40' :
                  contrib.level === 3 ? 'bg-[#7FFF00]/60' :
                  'bg-[#7FFF00]'
                } hover:ring-2 hover:ring-[#7FFF00]/50 cursor-pointer transition-all`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(127, 255, 0, 0.3)" 
            }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-[#7FFF00]/50 transition-all duration-300 text-center group"
          >
            <achievement.icon 
              size={32} 
              className="text-[#7FFF00] mx-auto mb-4 group-hover:scale-110 transition-transform" 
            />
            <div className="text-3xl font-bold text-white mb-2">
              {achievement.value}
            </div>
            <div className="text-gray-400 text-sm">
              {achievement.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
