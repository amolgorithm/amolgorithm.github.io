import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

export function Projects({ scrollY }: { scrollY: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Nexus',
      category: 'Full Stack',
      description: 'Revolutionary shopping platform with real-time inventory, AI recommendations, and seamless payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-orange-400 to-red-500',
      image: '🛒',
    },
    {
      title: 'TaskForce Pro',
      category: 'SaaS Platform',
      description: 'Team collaboration tool with advanced project management, real-time chat, and analytics dashboard.',
      tech: ['Next.js', 'PostgreSQL', 'WebSocket', 'AWS'],
      gradient: 'from-orange-500 to-amber-500',
      image: '⚡',
    },
    {
      title: 'CodeBattle Arena',
      category: 'Web Application',
      description: 'Competitive coding platform where developers battle in real-time algorithm challenges.',
      tech: ['TypeScript', 'GraphQL', 'Redis', 'Docker'],
      gradient: 'from-orange-600 to-orange-400',
      image: '⚔️',
    },
    {
      title: 'DesignHub Studio',
      category: 'Creative Tool',
      description: 'Collaborative design workspace with vector editing, asset management, and version control.',
      tech: ['React', 'Canvas API', 'Firebase', 'Tailwind'],
      gradient: 'from-amber-500 to-orange-500',
      image: '🎨',
    },
    {
      title: 'DataViz Engine',
      category: 'Analytics Platform',
      description: 'Interactive data visualization tool transforming complex datasets into beautiful, insightful charts.',
      tech: ['D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      gradient: 'from-orange-400 to-orange-600',
      image: '📊',
    },
    {
      title: 'Social Sphere',
      category: 'Social Network',
      description: 'Next-generation social platform with decentralized content, NFT profiles, and Web3 integration.',
      tech: ['React', 'Solidity', 'IPFS', 'Ethers.js'],
      gradient: 'from-orange-500 to-red-400',
      image: '🌐',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 107, 53, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <div className="px-6 py-3 border-2 border-orange-500 rounded-lg">
              <span className="text-orange-400 font-mono text-sm flex items-center gap-2">
                <Zap size={16} fill="currentColor" />
                EPIC BUILDS
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">BATTLE </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              VICTORIES
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Projects forged in the fires of passion and precision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                delay: index * 0.1,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
            >
              {/* Project Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-2xl overflow-hidden group-hover:border-orange-500 transition-all duration-300">
                {/* Action Lines Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
                      style={{
                        top: `${(i * 12.5)}%`,
                        transform: `rotate(${-30 + i * 7.5}deg)`,
                      }}
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Project Icon/Image */}
                  <motion.div
                    className={`mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.image}
                  </motion.div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 border-2 border-orange-500/50 rounded-lg hover:bg-orange-500/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-500/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-orange-500/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-orange-500/0 rounded-2xl blur-2xl group-hover:bg-orange-500/10 transition-all duration-300"
                  initial={false}
                />
              </div>

              {/* Power Level Indicator */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold border-4 border-black shadow-xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  ⚡
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            Explore More on GitHub
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
