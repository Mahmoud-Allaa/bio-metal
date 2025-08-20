'use client';

import { useEffect, useState } from 'react';

interface SectionIndicatorProps {
  currentSection: number;
  totalSections: number;
  sectionNames: string[];
  onSectionClick?: (index: number) => void;
}

export default function SectionIndicator({ currentSection, totalSections, sectionNames, onSectionClick }: SectionIndicatorProps) {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {Array.from({ length: totalSections }, (_, index) => (
        <div
          key={index}
          className="group flex items-center cursor-pointer"
          onClick={() => onSectionClick?.(index)}
        >
          {/* Section dot */}
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSection
                ? 'bg-blue-500 border-blue-500 scale-125'
                : 'bg-transparent border-white/50 hover:border-white/80'
            }`}
          />
          
          {/* Section label */}
          <div
            className={`ml-4 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
              index === currentSection
                ? 'bg-blue-500/20 text-blue-400 backdrop-blur-sm opacity-100 translate-x-0'
                : 'bg-black/20 text-white/70 backdrop-blur-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            {sectionNames[index]}
          </div>
        </div>
      ))}
    </div>
  );
}
