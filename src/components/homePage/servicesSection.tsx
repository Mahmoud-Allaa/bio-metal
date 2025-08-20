'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const t = useTranslations('HomePage');

  const services = [
    {
      title: "Artisan Craftsmanship",
      description: "Time-honored techniques refined through generations of dedicated expertise and precision",
      icon: "👑",
      accent: "primary"
    },
    {
      title: "Bespoke Solutions",
      description: "Tailored excellence designed to meet the most discerning and sophisticated requirements",
      icon: "⚜️",
      accent: "secondary"
    },
    {
      title: "Heritage Innovation",
      description: "Where traditional mastery meets contemporary advancement in perfect harmony",
      icon: "�",
      accent: "accent"
    },
    {
      title: "Distinguished Service",
      description: "Uncompromising commitment to excellence that defines true luxury and refinement",
      icon: "💎",
      accent: "neutral"
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-24 min-h-screen flex items-center justify-center bg-light relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light/20 to-background-light/20"></div>
      <div className="absolute top-1/3 left-16 w-80 h-80 bg-primary-medium/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-16 w-96 h-96 bg-primary-dark/15 rounded-full blur-3xl"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(var(--primary-medium) 1px, transparent 1px),
          linear-gradient(90deg, var(--primary-medium) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-24">
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
              Our <span className="text-gradient-gold">Expertise</span>
            </motion.h2>
            
            <motion.p 
              className="font-body text-xl md:text-2xl text-primary-medium mb-6 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Distinguished services that exemplify the pinnacle of sophistication, where every detail 
              reflects our commitment to excellence and timeless elegance.
            </motion.p>
            
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-old-money group relative p-8 text-center"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
              >
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-dark opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary-dark opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary-dark opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary-dark opacity-30 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Icon with Elegant Background */}
                <div className="text-5xl mb-6 p-4 bg-background-light group-hover:bg-primary-medium/20 transition-colors duration-500 inline-block border border-primary-medium">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="font-heading text-xl font-bold text-primary-dark mb-6 group-hover:text-gradient-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Decorative Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto mb-6 group-hover:via-primary-medium transition-colors"></div>
                
                {/* Description */}
                <p className="font-body text-primary-medium leading-relaxed group-hover:text-primary-dark transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="btn-old-money">
              Request Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
