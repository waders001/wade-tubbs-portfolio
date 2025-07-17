import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'OMR CMMS',
      description: 'A live Computerized Maintenance Management System for OMR Automotive. Built with PHP + MySQL. Includes workorder tracking, technician reporting, and export tools.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      category: 'Full-Stack Web App',
      status: 'Live Production',
      gradient: 'from-blue-500 to-purple-600',
      links: {
        live: '#',
        code: '#'
      }
    },
    {
      id: 2,
      title: 'MetaMatch - Brawl Stars Draft Assistant',
      description: 'Real-time draft simulator with meta/synergy logic. Uses React frontend and Python Flask backend. Integrates with Supercell API.',
      techStack: ['React', 'Flask', 'Python', 'Supercell API'],
      category: 'Gaming Tool',
      status: 'Active Development',
      gradient: 'from-green-500 to-blue-600',
      links: {
        live: '#',
        code: '#'
      }
    },
    {
      id: 3,
      title: 'GymSync',
      description: 'AI-powered fitness PWA with daily workout/diet plans, logging, and chatbot UI. Built in Bolt, backend via Supabase planned.',
      techStack: ['PWA', 'Bolt', 'Supabase', 'AI Integration'],
      category: 'AI-Powered App',
      status: 'In Progress',
      gradient: 'from-orange-500 to-red-600',
      links: {
        live: '#',
        code: '#'
      }
    },
    {
      id: 4,
      title: 'LocalPulse',
      description: 'A mobile-first event feed that surfaces real-time micro-events nearby. Built with Rocket UI and planned Supabase backend.',
      techStack: ['Rocket UI', 'Supabase', 'Real-time API'],
      category: 'MVP Development',
      status: 'MVP Stage',
      gradient: 'from-purple-500 to-pink-600',
      links: {
        live: '#',
        code: '#'
      }
    }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of full-stack applications, AI tools, and innovative solutions I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden hover-glow"
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Live Production' ? 'bg-green-100 text-green-800' :
                    project.status === 'Active Development' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-dark-700 text-primary-400 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.links.code}
                    className="flex items-center space-x-2 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Have an idea?</h2>
            <p className="text-gray-400 mb-6">
              I'm always interested in collaborating on innovative projects and exploring new technologies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>Let's work together</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;