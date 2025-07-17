import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 md:px-6 pt-16 md:pt-0">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Wade Tubbs
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Creative Technologist & Full-Stack Builder
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Building modern web applications and AI-integrated solutions from concept to production
            </p>
            
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span>Enter Site</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [-20, -100, -180],
                x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                repeatDelay: 1
              }}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;