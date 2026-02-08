import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function TechStack({ scrollY }: { scrollY: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techCategories = [
    {
      name: 'FRONTEND ARSENAL',
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Motion/Framer', level: 85, icon: '✨' },
      ],
    },
    {
      name: 'BACKEND POWER',
      color: 'from-orange-500 to-orange-700',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 87, icon: '🐘' },
        { name: 'MongoDB', level: 83, icon: '🍃' },
        { name: 'GraphQL', level: 80, icon: '◈' },
      ],
    },
    {
      name: 'TOOLS & SYSTEMS',
      color: 'from-orange-600 to-orange-800',
      skills: [
        { name: 'Git', level: 93, icon: '📊' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'CI/CD', level: 85, icon: '🔄' },
        { name: 'Linux', level: 88, icon: '🐧' },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          style={{ transform: `translateX(${-scrollY * 0.1}px)` }}
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
            className="inline-block mb-6 px-6 py-3 border-2 border-orange-500 rounded-lg"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 107, 53, 0.2)',
                '0 0 40px rgba(255, 107, 53, 0.4)',
                '0 0 20px rgba(255, 107, 53, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-orange-400 font-mono text-sm">POWER LEVELS LOADED</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">TECH </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              MASTERY
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Battle-tested technologies wielded with precision and expertise
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className={`px-6 py-3 bg-gradient-to-r ${category.color} rounded-lg font-bold text-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  {category.name}
                </motion.div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                  >
                    {/* Skill Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 overflow-hidden group-hover:scale-105">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,107,53,0.1) 10px, rgba(255,107,53,0.1) 20px)',
                        }} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon and Name */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <motion.span 
                              className="text-3xl"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="font-semibold text-lg">{skill.name}</span>
                          </div>
                          <span className="text-orange-400 font-bold text-xl">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Power Bar */}
                        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} relative`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              duration: 1,
                              ease: 'easeOut',
                            }}
                          >
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '200%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: 'linear',
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Energy Particles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-400 rounded-full"
                            style={{
                              top: `${20 + i * 20}%`,
                              right: `${10 + i * 10}%`,
                            }}
                            animate={{
                              scale: [0, 1.5, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        ))}
                      </div>

                      {/* Glow Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-orange-500/0 rounded-xl blur-xl group-hover:bg-orange-500/10 transition-all duration-300"
                        initial={false}
                      />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ultimate Power Display */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-block relative">
            <motion.div
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255, 107, 53, 0.5)',
                  '0 0 40px rgba(255, 107, 53, 0.8)',
                  '0 0 20px rgba(255, 107, 53, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LEVEL ∞
            </motion.div>
            
            {/* Energy Burst */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-orange-500 to-transparent origin-bottom"
                style={{
                  rotate: `${(i * 30)}deg`,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? {
                  scaleY: [0, 1, 0],
                  opacity: [0, 1, 0],
                } : {}}
                transition={{
                  delay: 1.8 + i * 0.05,
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
