'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TextReveal } from './animations/text-reveal';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user has seen splash screen before
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasSeenSplash', 'true');
    }, 1500); // Reduced from 2000ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0,     // No stagger between stripes
        delayChildren: 0        // Wait before starting the stripes animation
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1      // Reverse order on exit
      }
    }
  };

  const stripeVariants = {
    initial: {},
    animate: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0 }  // Smooth drop-in
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: { duration: 0.4 }  // Smooth rise-out
    }
  };

  // Updated character variants for staggered entry
  const characterVariants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: (i) => ({
      y: '0%',
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: i * 0.1  // 0.1 second delay between each character
      }
    }),
    exit: {
      y: '100%',
      opacity: 0,
      transition: { 
        duration: 0.4
      }
    }
  };

  const count = 8;
  const stripes = Array.from({ length: count });
  const name = "Vinayak";
  const characters = name.split('');  // Split name into characters

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-row overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          role="presentation"
          aria-hidden="true"
        >
          {/* Stripes */}
          {stripes.map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-full bg-black"
              variants={stripeVariants}
            />
          ))}
          
          {/* Character Animation */}
          <motion.div 
            className="absolute inset-0 z-10 flex items-center justify-center"
            variants={{
              exit: {
                transition: {
                  when: "beforeChildren" // Make parent exit before/same time as children
                }
              }
            }}
          >
            <h1 className="flex items-center">
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}  // Pass the index as custom prop for staggered animation
                  className="text-white text-4xl font-bold tracking-wide"
                  variants={characterVariants}
                  style={{ display: 'inline-block' }} // Make sure characters are inline
                >
                  <TextReveal
                                text={char}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                                highlightWords={["Vinayak", "Pandey"]}
                                delay={0.5}
                              />
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}