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
      className="py-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Elegant Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/60 to-amber-800/60"></div>
      <div className="absolute top-1/3 right-24 w-96 h-96 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-24 w-80 h-80 bg-gradient-to-r from-yellow-700/20 to-amber-700/20 rounded-full blur-3xl"></div>
      
      {/* Sophisticated Floating Elements */}
      {mounted && (
        <div className="absolute inset-0">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.2, 1],
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
              className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.h2 
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient-gold">Distinguished</span> Contact
            </motion.h2>
            
            <motion.p 
              className="font-body text-xl md:text-2xl text-amber-200 mb-6 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We extend our invitation to discerning individuals who appreciate the finest in craftsmanship 
              and seek unparalleled excellence in every detail.
            </motion.p>
            
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
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
                className="card-old-money group relative backdrop-blur-lg border-amber-400/30 hover:border-amber-300/50 text-center"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 + (index * 0.2) }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
              >
                {/* Elegant Icon Background */}
                <div className="text-4xl mb-6 p-4 bg-amber-800/30 group-hover:bg-amber-700/40 transition-colors duration-500 inline-block border border-amber-500/30">
                  {info.icon}
                </div>
                
                <h3 className="font-heading text-xl font-bold text-amber-100 mb-2 group-hover:text-gradient-gold transition-colors duration-300">
                  {info.label}
                </h3>
                
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 group-hover:via-yellow-400 transition-colors"></div>
                
                <p className="font-body text-amber-200 mb-2 group-hover:text-amber-100 transition-colors duration-300">
                  {info.value}
                </p>
                
                <p className="font-accent text-sm text-amber-300 tracking-wider uppercase">
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
                className="btn-old-money bg-gradient-to-r from-amber-600 to-amber-700 border-amber-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Consultation
              </motion.button>
              
              <motion.button
                className="btn-secondary border-amber-400/50 text-amber-200 hover:bg-amber-700/30 hover:border-amber-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Private Viewing
              </motion.button>
            </div>
            
            {/* Footer Elegance */}
            <motion.div 
              className="mt-16 pt-8 border-t border-primary-400/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <p className="font-accent text-primary-300 text-sm tracking-widest uppercase">
                Est. 1847 • Heritage • Excellence • Distinction
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
