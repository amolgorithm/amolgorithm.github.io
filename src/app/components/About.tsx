import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Sword, Star, Flame } from 'lucide-react';

export function About({ scrollY }: { scrollY: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Shield, label: 'Projects Completed', value: '50+', color: 'orange' },
    { icon: Sword, label: 'Technologies Mastered', value: '25+', color: 'orange' },
    { icon: Star, label: 'Years Experience', value: '5+', color: 'orange' },
    { icon: Flame, label: 'Coffee Consumed', value: '∞', color: 'orange' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 border-2 border-orange-500/20 rounded-full"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <span className="text-white">THE </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Anime Character Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black border-4 border-orange-500/30 rounded-2xl p-8 overflow-hidden">
              {/* Manga-style Speed Lines Background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-0.5 bg-orange-500"
                    style={{
                      top: `${(i * 8.33)}%`,
                      transformOrigin: 'left center',
                      transform: `rotate(${-30 + i * 5}deg)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>

              {/* Character Sketch */}
              <svg className="w-full h-full relative z-10" viewBox="0 0 300 300">
                {/* Headshot outline - anime style */}
                <motion.circle
                  cx="150"
                  cy="120"
                  r="60"
                  stroke="#ff6b35"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />

                {/* Hair spikes - dynamic anime style */}
                <motion.path
                  d="M120 70 L110 40 M140 65 L140 30 M160 65 L165 35 M180 75 L195 50"
                  stroke="#ff8c42"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1, duration: 1 }}
                />

                {/* Eyes - intense look */}
                <motion.line
                  x1="130"
                  y1="110"
                  x2="145"
                  y2="110"
                  stroke="#ffa500"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.3 }}
                />
                <motion.line
                  x1="155"
                  y1="110"
                  x2="170"
                  y2="110"
                  stroke="#ffa500"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.3 }}
                />

                {/* Body/Shoulders */}
                <motion.path
                  d="M100 180 L100 200 C100 220, 120 240, 150 240 C180 240, 200 220, 200 200 L200 180"
                  stroke="#ff6b35"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.4, duration: 1.2 }}
                />

                {/* Action effect - energy burst */}
                <motion.circle
                  cx="150"
                  cy="120"
                  r="80"
                  stroke="#ff6b35"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { 
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1.2, 1.5],
                  } : {}}
                  transition={{ delay: 1.8, duration: 1.5 }}
                />
              </svg>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-orange-500 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-orange-500 rounded-bl-2xl" />
            </div>

            {/* Floating Label */}
            <motion.div
              className="absolute -top-6 -right-6 bg-orange-500 text-black px-6 py-3 rounded-lg font-bold text-lg transform rotate-3"
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, rotate: 3, scale: 1 } : {}}
              transition={{ delay: 2, type: 'spring' }}
            >
              LVL 99
            </motion.div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-orange-400 font-bold text-2xl">//</span> A digital craftsman 
                on a mission to build extraordinary web experiences. Armed with modern technologies 
                and an unrelenting drive for pixel-perfect execution.
              </p>
              
              <p>
                From architecting scalable backends to designing stunning frontends, 
                I approach every challenge like an epic boss battle – with strategy, 
                skill, and style.
              </p>

              <p>
                My code doesn't just work – it performs. Every line is crafted with 
                precision, optimized for speed, and built to last. Because in the 
                world of development, good enough is never good enough.
              </p>
            </div>

            {/* Character Traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Perfectionist', 'Problem Solver', 'Fast Learner', 'Team Player'].map((trait, index) => (
                <motion.div
                  key={trait}
                  className="bg-gray-900/50 border-l-4 border-orange-500 px-4 py-3 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10, borderLeftWidth: 8 }}
                >
                  <span className="text-orange-400 font-semibold">{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-xl p-6 text-center hover:border-orange-500 transition-all duration-300 group-hover:scale-105">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-orange-500/10 border-2 border-orange-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-orange-500" />
                  </motion.div>

                  {/* Value */}
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500/0 rounded-xl blur-xl group-hover:bg-orange-500/20 transition-all duration-300"
                    initial={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
