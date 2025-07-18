import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import ShaderBackground from '../components/ShaderBackground';
import ScrambledText from '../components/ScrambledText';

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 md:px-6 pt-16 md:pt-0 bg-[#0b1120]">
      {/* Radial Overlay + Shader */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1e293b]/50 to-transparent z-0" />
      <ShaderBackground />

      <div className="text-center max-w-4xl mx-auto flex items-center justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Wade Tubbs
          </motion.h1>

          {/* Typewriter (NO EXTRA |) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 h-[2.5rem] flex justify-center items-center"
          >
            <TypeAnimation
              sequence={[
                'Creative Technologist',
                2000,
                'Full-Stack Builder',
                2000,
                'AI Explorer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-white drop-shadow-md"
              cursor={true} // ✅ built-in blinking cursor
            />
          </motion.div>

          {/* Scrambled Text Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <ScrambledText
              radius={120}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:-"
              className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200"
            >
              Building modern web applications and AI-integrated solutions from concept to production — combining cutting-edge design, scalable architecture, and intelligent systems to drive innovation and real-world impact.
            </ScrambledText>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span>Enter Site</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [-20, -100, -180],
                x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                repeatDelay: 1,
              }}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-80 blur-[1px]"
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
