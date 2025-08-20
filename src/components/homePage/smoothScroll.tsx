'use client';

import { useEffect, useState, useCallback } from 'react';
import SectionIndicator from './sectionIndicator';

export default function SmoothScroll() {
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Define section IDs and names in order
  const sections = ['hero', 'about', 'services', 'products', 'contact'];
  const sectionNames = ['Home', 'About', 'Services', 'Products', 'Contact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = useCallback((sectionIndex: number) => {
    if (sectionIndex < 0 || sectionIndex >= sections.length || isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(sectionIndex);
    
    const element = document.getElementById(sections[sectionIndex]);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [sections, isScrolling]);

  useEffect(() => {
    if (!mounted) return;

    let wheelTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;

    // Handle wheel events for section snapping
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < 100 || isScrolling) return; // Throttle scrolling
      
      lastScrollTime = now;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          // Scroll down - go to next section
          scrollToSection(currentSection + 1);
        } else {
          // Scroll up - go to previous section
          scrollToSection(currentSection - 1);
        }
      }, 50);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(currentSection - 1);
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          // Swipe up - go to next section
          scrollToSection(currentSection + 1);
        } else {
          // Swipe down - go to previous section
          scrollToSection(currentSection - 1);
        }
      }
    };

    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const sectionIndex = sections.indexOf(id);
        if (sectionIndex !== -1) {
          scrollToSection(sectionIndex);
        }
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('click', handleAnchorClick);

    // Add CSS for luxury smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        overflow-y: hidden; /* Disable default scrolling */
      }
      
      body {
        overflow-y: hidden; /* Disable default scrolling */
      }
      
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scroll-behavior: smooth;
        }
      }
      
      /* Custom scrollbar for luxury feel */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.1);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #2563eb, #7c3aed);
      }
      
      /* Section snap styling */
      .section-container {
        scroll-snap-type: y mandatory;
        height: 100vh;
        overflow-y: scroll;
      }
      
      .section-snap {
        scroll-snap-align: start;
        height: 100vh;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(wheelTimeout);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [mounted, currentSection, isScrolling, scrollToSection]);

  if (!mounted) return null;

}
