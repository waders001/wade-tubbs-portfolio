import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiCode, FiDatabase, FiSmartphone, FiCpu } from 'react-icons/fi';

const Resume = () => {
  const experience = [
    {
      period: '2024 - Present',
      title: 'Independent Developer & Builder',
      company: 'Freelance',
      description: 'Building full-stack applications, AI-integrated tools, and scalable systems. Focus on modern web development and product design.',
      achievements: [
        'Launched OMR CMMS for automotive industry',
        'Built MetaMatch gaming tool with real-time API integration',
        'Developed GymSync AI fitness platform',
        'Created LocalPulse MVP for local event discovery'
      ]
    },
    {
      period: '2023 - 2024',
      title: 'Full-Stack Developer',
      company: 'OMR Automotive',
      description: 'Developed and maintained a comprehensive Computerized Maintenance Management System using PHP and MySQL.',
      achievements: [
        'Built complete CMMS from scratch',
        'Implemented workorder tracking system',
        'Created technician reporting features',
        'Developed export and analytics tools'
      ]
    }
  ];

  const skills = {
    Frontend: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Vite', 'TypeScript'],
    Backend: ['PHP', 'Python (Flask)', 'Node.js', 'MySQL', 'Supabase', 'FPDF'],
    'AI Integration': ['OpenAI', 'Hugging Face', 'DeepSeek', 'LangChain'],
    Tools: ['GitHub', 'VS Code', 'Figma', 'Bolt.new', 'Rocket.new', 'Emergent']
  };

  const handleDownloadResume = () => {
    // This would typically trigger a PDF download
    alert('Resume download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20 md:pt-24 pb-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience and technical skills
          </p>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FiCalendar className="w-6 h-6 mr-3 text-primary-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="glass-card rounded-xl p-6 hover-glow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="bg-dark-700 text-primary-400 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FiCode className="w-6 h-6 mr-3 text-primary-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  {category === 'Frontend' && <FiSmartphone className="w-5 h-5 mr-2 text-primary-400" />}
                  {category === 'Backend' && <FiDatabase className="w-5 h-5 mr-2 text-primary-400" />}
                  {category === 'AI Integration' && <FiBrain className="w-5 h-5 mr-2 text-primary-400" />}
                  {category === 'Tools' && <FiCode className="w-5 h-5 mr-2 text-primary-400" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-dark-700 hover:bg-primary-600 text-primary-400 hover:text-white px-3 py-1 rounded-full text-sm transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies and AI integration. 
              Proven track record of building scalable applications from concept to production, with a focus 
              on user experience and innovative solutions. Experienced in both independent development and 
              collaborative environments, always eager to tackle new challenges and learn emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;