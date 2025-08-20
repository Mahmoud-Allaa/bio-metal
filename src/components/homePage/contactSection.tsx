'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function ContactSection() {
  const t = useTranslations('HomePage');
  const [mounted, setMounted] = useState(false);

  // Generate stable random values for SSR consistency
  const floatingElements = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      // Use index-based seed for consistent positioning
      const seed1 = (i * 13 + 7) % 100;
      const seed2 = (i * 17 + 11) % 100;
      const seed3 = (i * 19 + 3) % 7;
      const seed4 = (i * 23 + 5) % 3;
      
      return {
        id: i,
        left: seed1,
        top: seed2,
        duration: 4 + seed3,
        delay: seed4,
      };
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: "�",
      label: "Correspondence",
      value: "inquiries@biometal.estate",
      description: "For distinguished inquiries"
    },
    {
      icon: "☎️",
      label: "Private Line",
      value: "+1 (555) 123-4567",
      description: "Exclusive consultations"
    },
    {
      icon: "🏛️",
      label: "Estate",
      value: "Mayfair, London",
      description: "By appointment only"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white text-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent"></div>
      
      {/* Sophisticated Floating Elements */}
      {mounted && (
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-gray-300/40 rounded-full"
          style={{
          left: `${element.left}%`,
          top: `${element.top}%`,
          }}
          animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
          }}
          transition={{
          duration: element.duration,
          repeat: Infinity,
          delay: element.delay,
          ease: "easeInOut",
          }}
        />
        ))}
      </div>
      )}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-24">
        <motion.div 
          className="w-32 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
        
        <motion.h2 
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide text-gray-900"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient-gold">Distinguished</span> Contact
        </motion.h2>
        
        <motion.p 
          className="font-body text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We extend our invitation to discerning individuals who appreciate the finest in craftsmanship 
          and seek unparalleled excellence in every detail.
        </motion.p>
        
        <motion.div 
          className="w-24 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {contactInfo.map((info, index) => (
          <motion.div
          key={index}
          className="card-old-money group relative backdrop-blur-lg bg-white/60 border-gray-300/50 hover:border-gray-600/60 text-center shadow-lg"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 + (index * 0.2) }}
          viewport={{ once: true }}
          whileHover={{ y: -12, scale: 1.03 }}
          >
          {/* Elegant Icon Background */}
          <div className="text-4xl mb-6 p-4 bg-gray-100/60 group-hover:bg-gray-200/70 transition-colors duration-500 inline-block border border-gray-300/40">
            {info.icon}
          </div>
          
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-gradient-gold transition-colors duration-300">
            {info.label}
          </h3>
          
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-4 group-hover:via-gray-700 transition-colors"></div>
          
          <p className="font-body text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
            {info.value}
          </p>
          
          <p className="font-accent text-sm text-gray-600 tracking-wider uppercase">
            {info.description}
          </p>
          </motion.div>
        ))}
        </div>

        {/* Elegant Call to Action */}
        <motion.div
        className="text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        viewport={{ once: true }}
        >
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <motion.button
          className="btn-old-money bg-gradient-to-r from-gray-900 to-gray-800 border-gray-900 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
          Request Consultation
          </motion.button>
          
          <motion.button
          className="btn-secondary border-gray-600/60 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
          Private Viewing
          </motion.button>
        </div>
        
        {/* Footer Elegance */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-300/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <p className="font-accent text-gray-600 text-sm tracking-widest uppercase">
          Est. 1847 • Heritage • Excellence • Distinction
          </p>
        </motion.div>
        </motion.div>
      </motion.div>
      </div>
    </motion.section>
  );
}
