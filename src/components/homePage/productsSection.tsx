'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ProductsSection() {
  const t = useTranslations('HomePage');

  const products = [
    {
      title: "Heritage Collection",
      description: "Timeless pieces that embody the essence of traditional craftsmanship and enduring elegance",
      category: "Classic",
      image: "🏆",
      features: ["Handcrafted", "Limited Edition", "Lifetime Warranty"]
    },
    {
      title: "Prestige Series",
      description: "Distinguished solutions for those who appreciate the finest in luxury and sophistication",
      category: "Premium",
      image: "💼",
      features: ["Bespoke Design", "Exclusive Materials", "Concierge Service"]
    },
    {
      title: "Legacy Masterpieces",
      description: "Extraordinary creations that define the pinnacle of artisanal excellence and refinement",
      category: "Masterwork",
      image: "�",
      features: ["One-of-a-Kind", "Master Artisan", "Heritage Certified"]
    }
  ];

  return (
    <motion.section 
      id="products" 
      className="py-24 min-h-screen flex items-center justify-center bg-light relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background-light/20 to-background-light/20"></div>
      <div className="absolute top-32 left-1/3 w-80 h-80 bg-primary-medium/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-primary-dark/15 rounded-full blur-3xl"></div>
      
      {/* Elegant Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary-medium transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary-medium transform rotate-12"></div>
      </div>

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
              Our <span className="text-gradient-navy">Collections</span>
            </motion.h2>
            
            <motion.p 
              className="font-body text-xl md:text-2xl text-primary-medium mb-6 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Curated selections that represent the epitome of luxury and craftsmanship, where each piece 
              tells a story of tradition, excellence, and timeless sophistication.
            </motion.p>
            
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="card-old-money group relative overflow-hidden"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 + (index * 0.2) }}
                viewport={{ once: true }}
                whileHover={{ y: -16, scale: 1.03 }}
              >
                {/* Elegant Card Header */}
                <div className="relative p-8 text-center border-b border-primary-medium">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {product.image}
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-accent px-4 py-2 bg-background-light text-primary-dark text-sm font-semibold tracking-wider uppercase border border-primary-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4 group-hover:text-gradient-gold transition-colors duration-500">
                    {product.title}
                  </h3>
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <p className="font-body text-primary-medium leading-relaxed mb-8 text-center">
                    {product.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto mb-6"></div>
                    </div>
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center justify-center text-sm text-primary-medium font-accent tracking-wider"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary-dark mr-3 transform rotate-45"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Call to Action */}
                  <div className="text-center mt-8">
                    <button className="font-accent text-primary-dark hover:text-primary-medium underline-elegant text-sm tracking-wider uppercase transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                
                {/* Elegant Bottom Accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary-dark opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-primary-dark opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Section Footer */}
          <motion.div 
            className="text-center mt-20"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="btn-old-money">
              View Full Catalog
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
