import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Full-Stack Social Media Web App",
      description: "A comprehensive social media platform with user authentication, real-time messaging, post sharing, and interactive features built with MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "#",
      date: "2024",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Responsive e-commerce website with shopping cart, payment integration using Stripe API, product catalog, and user management system.",
      tech: ["React", "Node.js", "Stripe API", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "#",
      date: "2024",
      featured: false
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations, dark theme, and interactive elements.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      image: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "https://amardeep-portfolio-website.netlify.app/",
      date: "2024",
      featured: true
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "https://system-dash-prince.netlify.app/",
      date: "2023",
      featured: false
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#7FFF00] to-white bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7FFF00] to-transparent mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Explore my latest work showcasing innovative solutions and cutting-edge technologies
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#7FFF00] via-[#7FFF00]/50 to-transparent hidden lg:block"></div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#7FFF00] rounded-full border-4 border-black z-10 hidden lg:block">
                <div className="absolute inset-0 bg-[#7FFF00] rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4 mb-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#7FFF00] text-black p-3 rounded-full hover:bg-white transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#7FFF00] text-black p-3 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-[#7FFF00] text-black px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                className="flex-1 space-y-6"
              >
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-gray-800 to-gray-700 text-[#7FFF00] px-4 py-2 rounded-full text-sm font-medium border border-gray-600 hover:border-[#7FFF00] transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(127, 255, 0, 0.4)"
                    }}
                    className="flex items-center space-x-2 bg-transparent border-2 border-[#7FFF00] text-[#7FFF00] px-6 py-3 rounded-full hover:bg-[#7FFF00] hover:text-black transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(127, 255, 0, 0.4)"
                    }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] text-black px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-20"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(127, 255, 0, 0.5)"
          }}
          className="bg-transparent border-2 border-[#7FFF00] text-[#7FFF00] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7FFF00] hover:text-black transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">View All Projects</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Projects;
