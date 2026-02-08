import { motion } from 'motion/react';
import { Terminal, Sparkles, Zap, Code } from 'lucide-react';

export function Hero({ scrollY }: { scrollY: number }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Action Lines - Manga Style */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            style={{
              top: `${(i * 5)}%`,
              left: '-100%',
              width: '200%',
              rotate: `${-45 + i * 2}deg`,
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: '100%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 border-2 border-orange-500 rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 107, 53, 0.3)',
                    '0 0 40px rgba(255, 107, 53, 0.6)',
                    '0 0 20px rgba(255, 107, 53, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-orange-400 font-mono flex items-center gap-2">
                  <Terminal size={16} />
                  DEVELOPER_MODE: ACTIVE
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="block text-white">CODE</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  WARRIOR
                </span>
              </h1>

              <div className="flex items-center gap-2 text-xl md:text-2xl text-gray-400 font-mono">
                <span className="text-orange-500">{'>'}</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Full Stack Developer & UI Architect
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Crafting digital experiences with precision and passion. 
              Where clean code meets creative design in an epic battle 
              against mediocrity.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <Sparkles size={18} />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Anime Character Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            {/* Character Silhouette with Tech Elements */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Energy Aura */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Character Base */}
              <svg className="w-full h-full relative z-10" viewBox="0 0 400 400">
                {/* Character Outline - Anime Style */}
                <motion.path
                  d="M200 50 C180 50, 160 70, 160 100 L160 150 C160 150, 140 170, 140 200 L140 280 C140 300, 150 320, 170 330 L170 380 M230 380 L230 330 C250 320, 260 300, 260 280 L260 200 C260 170, 240 150, 240 150 L240 100 C240 70, 220 50, 200 50"
                  stroke="url(#character-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />

                {/* Code Symbols Orbiting */}
                <motion.text
                  x="100"
                  y="100"
                  className="text-2xl fill-orange-400 font-mono"
                  animate={{
                    rotate: [0, 360],
                    x: [100, 120, 100],
                    y: [100, 80, 100],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {'</>'}
                </motion.text>

                <motion.text
                  x="280"
                  y="150"
                  className="text-2xl fill-orange-500 font-mono"
                  animate={{
                    rotate: [360, 0],
                    x: [280, 260, 280],
                    y: [150, 170, 150],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {'{}'}
                </motion.text>

                <motion.text
                  x="120"
                  y="280"
                  className="text-2xl fill-orange-300 font-mono"
                  animate={{
                    rotate: [0, 360],
                    x: [120, 100, 120],
                    y: [280, 300, 280],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {'()'}
                </motion.text>

                {/* Energy Lines */}
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((i * Math.PI) / 4) * 150}
                    y2={200 + Math.sin((i * Math.PI) / 4) * 150}
                    stroke="rgba(255, 107, 53, 0.3)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}

                <defs>
                  <linearGradient id="character-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="50%" stopColor="#ff8c42" />
                    <stop offset="100%" stopColor="#ffa500" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-10 right-10"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-orange-400" fill="currentColor" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Code className="w-10 h-10 text-orange-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
