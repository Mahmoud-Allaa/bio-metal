"use client";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', section: 'hero' },
    { key: 'about', section: 'about' },
    { key: 'services', section: 'services' },
    { key: 'products', section: 'products' },
    { key: 'contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavButton = ({ item, className }: { item: typeof navItems[0], className: string }) => (
    <button
      onClick={() => scrollToSection(item.section)}
      className={`${className} text-white hover:text-background-light transition-elegant relative underline-elegant`}
    >
      {t(item.key)}
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-light/95 border-b border-primary-medium shadow-lg backdrop-blur-lg' 
        : 'bg-primary-dark/20 backdrop-blur-md'
    }`}>
      <div className="mx-auto px-0">
        <div className="flex justify-between items-center h-20 md:h-24 px-6 md:px-12 lg:px-16">
          {/* Elegant Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 text-2xl md:text-3xl font-accent font-bold transition-elegant group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-dark to-primary-medium flex items-center justify-center group-hover:shadow-lg transition-luxury border border-primary-dark">
              <span className="text-white font-accent font-bold text-lg md:text-xl">BM</span>
            </div>
            <span className={`${isScrolled ? 'text-primary-dark' : 'text-white'} tracking-wider`}>
              Bio Metal
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavButton 
                key={item.key}
                item={item}
                className={`px-4 py-3 text-sm font-medium font-accent tracking-wider uppercase transition-elegant ${
                  isScrolled ? 'text-primary-dark hover:text-primary-medium' : 'text-white hover:text-background-light'
                }`}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 transition-elegant ${
              isScrolled 
                ? 'text-primary-dark hover:bg-background-light' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 space-y-2 bg-light/95 backdrop-blur-lg border-t border-primary-medium shadow-lg">
            {navItems.map((item) => (
              <NavButton 
                key={item.key}
                item={item}
                className="block px-4 py-3 text-base font-medium font-accent text-white hover:text-primary-medium transition-elegant w-full text-left hover:bg-background-light tracking-wider uppercase"
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
