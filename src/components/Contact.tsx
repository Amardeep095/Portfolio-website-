import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "1324Amardeep@gmail.com",
      href: "mailto:1324Amardeep@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7991167574",
      href: "tel:+91 7991167574"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Amardeep095", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amardeepkumar090/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/AMARDEEPKU71959", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/amardeep__choudhary__?igsh=aDVmdTlpYmR0NGxn", label: "Instagram" }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-[#7FFF00] to-white bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7FFF00] to-transparent mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
       {/* Contact Form */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="space-y-8"
>
  <div>
    <h3 className="text-3xl font-bold text-white mb-4">Send a Message</h3>
    <p className="text-gray-400">
      Fill out the form below and I'll get back to you as soon as possible.
    </p>
  </div>

  {/* Formspree Integration */}
  <form 
    action="https://formspree.io/f/mrbagqdy" // <-- replace with your Formspree endpoint
    method="POST"
    className="space-y-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
        <input
          type="text"
          name="name"
          required
          className="w-full bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7FFF00] focus:ring-1 focus:ring-[#7FFF00] transition-all duration-300"
          placeholder="Your Name"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7FFF00]/10 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>

      <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
        <input
          type="email"
          name="email"
          required
          className="w-full bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7FFF00] focus:ring-1 focus:ring-[#7FFF00] transition-all duration-300"
          placeholder="Your Email"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7FFF00]/10 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>
    </div>

    <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
      <input
        type="text"
        name="subject"
        required
        className="w-full bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7FFF00] focus:ring-1 focus:ring-[#7FFF00] transition-all duration-300"
        placeholder="Subject"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#7FFF00]/10 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>

    <motion.div whileFocus={{ scale: 1.02 }} className="relative group">
      <textarea
        name="message"
        required
        rows={6}
        className="w-full bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#7FFF00] focus:ring-1 focus:ring-[#7FFF00] transition-all duration-300 resize-none"
        placeholder="Your Message"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#7FFF00]/10 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>

    <motion.button
      type="submit"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 30px rgba(127, 255, 0, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-gradient-to-r from-[#7FFF00] to-[#5EDD00] text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        <Send size={20} />
        <span>Send Message</span>
      </span>
    </motion.button>
  </form>
</motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400">
              I'm always excited to work on new projects and meet amazing people. 
              Don't hesitate to reach out!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(127, 255, 0, 0.3)"
                }}
                className="flex items-center space-x-4 p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700 hover:border-[#7FFF00]/50 transition-all duration-300 group"
              >
                <div className="bg-[#7FFF00] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{info.label}</h4>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(127, 255, 0, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/50 backdrop-blur-lg p-4 rounded-full border border-gray-700 hover:border-[#7FFF00] hover:bg-[#7FFF00] hover:text-black transition-all duration-300 group"
                >
                  <social.icon size={24} className="group-hover:text-black text-[#7FFF00]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#7FFF00]/10 to-transparent rounded-xl p-6 border border-[#7FFF00]/30"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-[#7FFF00] rounded-full animate-pulse"></div>
              <span className="text-[#7FFF00] font-medium">Available for new projects</span>
            </div>
            <p className="text-gray-400 text-sm">
              I'm currently accepting new freelance projects and full-time opportunities. 
              Let's create something extraordinary together!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 pt-8 border-t border-gray-800 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            © 2024 Amardeep Kumar. All rights reserved.
          </p>
          <p className="text-gray-400">
            Built with ❤️ using React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
