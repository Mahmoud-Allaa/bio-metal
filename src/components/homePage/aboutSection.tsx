'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const t = useTranslations('HomePage');

  return (
    <motion.section 
      id="about" 
      className="py-24 min-h-screen flex items-center justify-center bg-light relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Elegant Background Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light/30 to-transparent"></div>
      <div className="absolute top-32 right-32 w-96 h-96 bg-primary-medium/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-80 h-80 bg-primary-dark/30 rounded-full blur-2xl"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-medium to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-medium to-transparent"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.h2 
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-8 tracking-wide"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gradient-gold">Heritage</span>
            </motion.h2>
            
            <motion.p 
              className="font-body text-xl md:text-2xl text-primary-medium mb-6 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              For generations, we have upheld the finest traditions of craftsmanship while embracing 
              innovation that defines excellence. Our legacy is built upon precision, integrity, and 
              an unwavering commitment to sophistication.
            </motion.p>
            
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Statistics Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { number: "1847", label: "Established" },
              { number: "500+", label: "Distinguished Clients" },
              { number: "25+", label: "Global Partnerships" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="card-old-money text-center p-10 group"
                whileHover={{ y: -8, scale: 1.03 }}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {/* Decorative Top Element */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-6 group-hover:via-accent-500 transition-colors"></div>
                
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-4">{stat.number}</div>
                <div className="font-accent text-text-secondary text-lg tracking-wider uppercase">{stat.label}</div>
                
                {/* Decorative Bottom Element */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 group-hover:via-accent-500 transition-colors"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <a href="#services" className="btn-old-money">
              Discover Our Craft
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
