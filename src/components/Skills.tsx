import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu,
  Palette,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication", "C++"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: ["Git", "VS Code", "Postman", "npm", "Webpack", "Chrome DevTools"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Emerging Tech",
      icon: Cpu,
      skills: ["ChatGPT", "GitHub Copilot", "IoT", "Edge Computing", "Cloud Computing", "Machine Learning"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Canva", "User Experience", "Prototyping", "Wireframing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Interests",
      icon: Zap,
      skills: ["Web Development", "Mobile Apps", "Data Structures", "Algorithms", "Open Source", "Tech Innovation"],
      color: "from-[#7FFF00] to-green-500"
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#7FFF00] to-white bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7FFF00] to-transparent mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(127, 255, 0, 0.2)"
            }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-[#7FFF00]/50 transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#7FFF00] transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(127, 255, 0, 0.3)"
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-[#7FFF00] hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-[#7FFF00]/50"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7FFF00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating skill icons animation */}
      <div className="relative mt-20 h-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[Code, Database, Globe, Smartphone, Cloud, Cpu, Palette, Terminal, Layers, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-[#7FFF00]/20"
              style={{
                left: `${10 + (index * 8)}%`,
                top: `${20 + Math.sin(index) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              <Icon size={32} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;