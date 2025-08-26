import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Engineering - Computer Science",
      organization: "Chandigarh University",
      location: "Punjab, India",
      period: "Aug 2022 - Jun 2026",
      description: "Pursuing comprehensive education in Computer Science with focus on software development, data structures, algorithms, and modern web technologies.",
      highlights: [
        "Strong foundation in programming fundamentals",
        "Hands-on experience with full-stack development",
        "Active participation in coding competitions",
        "Collaborative projects and team development"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      type: "certification",
      title: "ReactJS Certification",
      organization: "Coursera",
      location: "Online",
      period: "2024",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and modern React development practices.",
      highlights: [
        "Component-based architecture",
        "State management with hooks",
        "React Router and navigation",
        "Performance optimization techniques"
      ],
      icon: Award,
      color: "from-green-500 to-emerald-500",
      link: "https://www.coursera.org/account/accomplishments/records/35QXREOOPATB"
    },
    {
      id: 3,
      type: "certification",
      title: "IoT, Edge & Cloud Computing",
      organization: "NPTEL",
      location: "Online",
      period: "2023",
      description: "Advanced certification in Internet of Things, Edge Computing, and Cloud Computing technologies and their practical applications.",
      highlights: [
        "IoT device programming and connectivity",
        "Edge computing architectures",
        "Cloud service deployment",
        "Distributed systems concepts"
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500",
      link: "https://drive.google.com/drive/folders/1ymTjgAP6kj15zbDTigc6VTXE9kNuqO9n?usp=drive_link"
    },
    {
      id: 4,
      type: "certification",
      title: "Web Development Essentials",
      organization: "",
      location: "Online",
      period: "2023",
      description: "Foundational certification covering essential web development technologies, best practices, and modern development workflows.",
      highlights: [
        "HTML5, CSS3, and JavaScript mastery",
        "Responsive web design principles",
        "Version control with Git",
        "Modern development tools and workflows"
      ],
      icon: Award,
      color: "from-orange-500 to-red-500",
      link: "https://coursera.org/share/8fcbe7a3afa9acac6cf97b995bcc590d"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#7FFF00] to-white bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7FFF00] to-transparent mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Academic journey and professional certifications that shape my expertise in modern technology
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#7FFF00] via-[#7FFF00]/50 to-transparent hidden lg:block"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#7FFF00] rounded-full border-4 border-black z-10 hidden lg:block">
                <div className="absolute inset-0 bg-[#7FFF00] rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(127, 255, 0, 0.3)"
                }}
                className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-[#7FFF00]/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#7FFF00] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[#7FFF00] font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  {exp.link && (
                    <motion.a
                      href={exp.link}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-[#7FFF00] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>

                <div className="flex items-center space-x-6 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center space-x-2 text-gray-400"
                      >
                        <div className="w-2 h-2 bg-[#7FFF00] rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7FFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"></div>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-[#7FFF00]">
          GitHub & Achievements
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Public Repositories", value: "15+", icon: "📁" },
            { label: "Contributions", value: "200+", icon: "🔥" },
            { label: "Languages Used", value: "8+", icon: "💻" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-[#7FFF00]/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#7FFF00] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://github.com/amardeepkumar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(127, 255, 0, 0.4)"
            }}
            className="flex items-center space-x-2 bg-[#7FFF00] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            <span>View GitHub</span>
            <ExternalLink size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/amardeepkumar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(127, 255, 0, 0.4)"
            }}
            className="flex items-center space-x-2 border-2 border-[#7FFF00] text-[#7FFF00] px-6 py-3 rounded-full font-bold hover:bg-[#7FFF00] hover:text-black transition-all duration-300"
          >
            <span>LinkedIn</span>
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
