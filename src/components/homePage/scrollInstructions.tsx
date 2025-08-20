'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollInstructions() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide instructions after 5 seconds
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 text-white/80 text-sm font-medium border border-white/10">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↕️
          </motion.div>
          <span>Scroll or use arrow keys to navigate sections</span>
        </div>
      </div>
    </motion.div>
  );
}
