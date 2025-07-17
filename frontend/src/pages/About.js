import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiSmartphone, 
  FiBrain,
  FiGithub,
  FiExternalLink
} from 'react-icons/fi';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started web & AI dev',
      description: 'Began journey into modern web development and AI integration'
    },
    {
      year: '2024',
      title: 'Launched OMR CMMS for OMR Automotive',
      description: 'Built a comprehensive maintenance management system'
    },
    {
      year: '2024',
      title: 'Built MetaMatch draft assistant',
      description: 'Created real-time Brawl Stars draft tool with game API integration'
    },
    {
      year: '2024',
      title: 'Designed GymSync fitness app',
      description: 'AI-powered fitness PWA with personalized workout plans'
    },
    {
      year: '2025',
      title: 'Working on MVPs like LocalPulse',
      description: 'Developing real-time local event discovery platform'
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'Tailwind', icon: '🎨', color: 'text-cyan-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'PHP', icon: '🟣', color: 'text-purple-400' },
    { name: 'Flask', icon: '🔥', color: 'text-red-400' },
    { name: 'Supabase', icon: '⚡', color: 'text-green-400' },
    { name: 'OpenAI', icon: '🤖', color: 'text-primary-400' },
    { name: 'HuggingFace', icon: '🤗', color: 'text-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-20 md:pt-24 pb-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about building innovative solutions at the intersection of technology and user experience
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              WT
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-4">Wade Tubbs</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm Wade Tubbs — a self-driven developer and builder focused on modern web development, AI integration, and product design. I specialize in crafting full-stack applications, interactive UIs, and scalable systems from concept to production. From building a live CMMS for OMR Automotive to launching AI-powered tools like MetaMatch and GymSync, I focus on shipping valuable, usable products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Journey Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow tech-icon"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className={`font-semibold ${tech.color}`}>{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;