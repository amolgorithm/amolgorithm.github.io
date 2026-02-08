import { motion, useAnimation } from 'motion/react';
import { Terminal, Sparkles, Zap, Code, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero({ scrollY }: { scrollY: number }) {
  const builderControls = useAnimation();
  const [builderAction, setBuilderAction] = useState<'working' | 'running' | 'carrying'>('working');

  useEffect(() => {
    const animateBuilder = async () => {
      while (true) {
        // Working on rocket
        setBuilderAction('working');
        await builderControls.start({
          x: 150,
          y: -50,
          transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
        });
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Running to get materials
        setBuilderAction('running');
        await builderControls.start({
          x: -180,
          y: 20,
          transition: { duration: 0.6, ease: 'easeInOut' }
        });
        
        // Carrying materials back
        setBuilderAction('carrying');
        await new Promise(resolve => setTimeout(resolve, 800));
        await builderControls.start({
          x: 150,
          y: -50,
          transition: { duration: 1, ease: 'easeInOut' }
        });
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return to center to reset
        await builderControls.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' }
        });
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    };
    
    animateBuilder();
  }, [builderControls]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        {/* Distant Stars */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-0.5 w-16 bg-gradient-to-r from-white to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 300],
              y: [0, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 4,
              repeat: Infinity,
              repeatDelay: 10,
            }}
          />
        ))}
        
        {/* Massive Black Hole */}
        <motion.div
          className="absolute top-16 right-24 w-80 h-80"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="relative w-full h-full">
            {/* Accretion Disk Rings */}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`disk-${i}`}
                className="absolute inset-0 rounded-full"
                style={{
                  border: `${3 - i * 0.3}px solid rgba(255, 107, 53, ${0.7 - i * 0.08})`,
                  transform: `scale(${1 + i * 0.15}) rotateX(${60 + i * 2}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  rotate: {
                    duration: 4 - i * 0.4,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  opacity: {
                    duration: 2.5,
                    repeat: Infinity,
                  },
                }}
              />
            ))}
            
            {/* Gravitational Lensing Effect */}
            <motion.div
              className="absolute inset-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, transparent 35%, rgba(255, 107, 53, 0.15) 50%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {/* Event Horizon */}
            <div className="absolute inset-1/4 rounded-full bg-black shadow-[0_0_80px_40px_rgba(255,107,53,0.6),inset_0_0_30px_10px_rgba(0,0,0,1)]" />
            
            {/* Singularity */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500"
              animate={{
                boxShadow: [
                  '0 0 20px 5px rgba(255, 107, 53, 0.8)',
                  '0 0 30px 10px rgba(255, 107, 53, 1)',
                  '0 0 20px 5px rgba(255, 107, 53, 0.8)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Realistic Moons with Rotation */}
        <motion.div
          className="absolute top-1/4 left-24"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-32 h-32 rounded-full relative" style={{
            background: 'radial-gradient(circle at 30% 30%, #d4d4d4, #787878)',
            boxShadow: 'inset -15px -15px 30px rgba(0,0,0,0.6), 5px 5px 20px rgba(0,0,0,0.8)',
          }}>
            {/* Craters with depth */}
            <div className="absolute top-3 right-5 w-6 h-6 rounded-full bg-gray-700 shadow-inner" style={{
              boxShadow: 'inset 2px 2px 8px rgba(0,0,0,0.8)',
            }} />
            <div className="absolute bottom-6 left-4 w-8 h-8 rounded-full bg-gray-700 shadow-inner" style={{
              boxShadow: 'inset 3px 3px 10px rgba(0,0,0,0.7)',
            }} />
            <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-gray-700 shadow-inner" style={{
              boxShadow: 'inset 1px 1px 6px rgba(0,0,0,0.9)',
            }} />
            {/* Small craters */}
            <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-gray-600 opacity-60" />
            <div className="absolute bottom-10 right-8 w-2 h-2 rounded-full bg-gray-600 opacity-50" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-40"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-20 h-20 rounded-full relative" style={{
            background: 'radial-gradient(circle at 35% 35%, #ffb366, #ff6b35)',
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.6), inset -8px -8px 20px rgba(0,0,0,0.4)',
          }} />
        </motion.div>

        {/* Smaller distant moon */}
        <motion.div
          className="absolute bottom-1/3 left-1/4"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <div className="w-12 h-12 rounded-full opacity-70" style={{
            background: 'radial-gradient(circle at 40% 40%, #a8a8a8, #505050)',
            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.5)',
          }} />
        </motion.div>
      </div>

      {/* Intense Manga Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`speed-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{
              top: `${(i * 2.5)}%`,
              left: '-200%',
              width: '400%',
              height: `${Math.random() * 4 + 2}px`,
              rotate: `${-55 + i * 2.75}deg`,
              opacity: 0.3,
            }}
            animate={{ 
              x: ['0%', '200%'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.03,
              repeat: Infinity,
              repeatDelay: 2,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
      </div>

      {/* Planet Surface with Rocky Terrain */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-800 via-gray-750 to-transparent">
        {/* Rocky texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, transparent 12%, rgba(0,0,0,0.3) 12.5%),
            radial-gradient(circle at 60% 80%, transparent 10%, rgba(0,0,0,0.2) 10.5%),
            radial-gradient(circle at 85% 30%, transparent 8%, rgba(0,0,0,0.25) 8.5%),
            radial-gradient(circle at 40% 20%, transparent 6%, rgba(0,0,0,0.2) 6.5%),
            radial-gradient(circle at 10% 90%, transparent 15%, rgba(0,0,0,0.3) 15.5%)
          `,
        }} />
        
        {/* Ground highlights */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-900/20 to-transparent" />
      </div>

      {/* Rocket Under Construction */}
      <motion.div
        className="absolute"
        style={{ right: '15%', bottom: '25%' }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="120" height="200" viewBox="0 0 120 200" className="drop-shadow-2xl">
          {/* Rocket Body */}
          <defs>
            <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#909090" />
            </linearGradient>
          </defs>
          
          {/* Main body */}
          <rect x="35" y="60" width="50" height="100" fill="url(#rocketGradient)" stroke="#606060" strokeWidth="2" />
          
          {/* Nose cone */}
          <polygon points="60,20 35,60 85,60" fill="#ff6b35" stroke="#ff4500" strokeWidth="2" />
          
          {/* Window */}
          <circle cx="60" cy="80" r="12" fill="#4a90e2" stroke="#2c5aa0" strokeWidth="2" opacity="0.8" />
          
          {/* Fins */}
          <polygon points="35,140 20,160 35,160" fill="#ff6b35" stroke="#ff4500" strokeWidth="2" />
          <polygon points="85,140 100,160 85,160" fill="#ff6b35" stroke="#ff4500" strokeWidth="2" />
          
          {/* Engine */}
          <rect x="40" y="160" width="40" height="20" fill="#606060" stroke="#404040" strokeWidth="2" />
          
          {/* Panels and details */}
          <rect x="45" y="100" width="30" height="50" fill="none" stroke="#707070" strokeWidth="1" strokeDasharray="3,2" />
          
          {/* Scaffolding */}
          <line x1="25" y1="180" x2="25" y2="100" stroke="#8b4513" strokeWidth="3" />
          <line x1="95" y1="180" x2="95" y2="100" stroke="#8b4513" strokeWidth="3" />
          <line x1="25" y1="140" x2="35" y2="140" stroke="#8b4513" strokeWidth="2" />
          <line x1="95" y1="140" x2="85" y2="140" stroke="#8b4513" strokeWidth="2" />
        </svg>
        
        {/* Welding sparks */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.cos(i * 45 * Math.PI / 180) * 20}px`,
                top: `${Math.sin(i * 45 * Math.PI / 180) * 20}px`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Supply Crates */}
      <div className="absolute" style={{ left: '12%', bottom: '20%' }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 35}px`,
              bottom: `${i * 10}px`,
            }}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          >
            <div className="w-12 h-12 bg-gray-600 border-2 border-gray-500 relative shadow-lg">
              <div className="absolute inset-2 border border-orange-400 opacity-50" />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700" />
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-700" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Anime-Style Builder Character */}
      <motion.div
        className="absolute"
        style={{ left: '50%', bottom: '22%', marginLeft: '-30px' }}
        animate={builderControls}
      >
        <svg width="60" height="80" viewBox="0 0 60 80" className="drop-shadow-xl">
          {/* Character outline with anime style */}
          
          {/* Head */}
          <ellipse cx="30" cy="20" rx="12" ry="14" fill="#ffdbac" stroke="#000" strokeWidth="2" />
          
          {/* Spiky Hair */}
          <motion.path
            d="M20,16 L15,8 M25,14 L24,6 M30,13 L30,4 M35,14 L36,6 M40,16 L45,8"
            stroke="#ff6b35"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M20,16 L15,8 M25,14 L24,6 M30,13 L30,4 M35,14 L36,6 M40,16 L45,8",
                "M20,16 L14,6 M25,14 L23,4 M30,13 L29,2 M35,14 L37,4 M40,16 L46,6",
                "M20,16 L15,8 M25,14 L24,6 M30,13 L30,4 M35,14 L36,6 M40,16 L45,8",
              ],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          {/* Determined eyes */}
          <motion.g
            animate={{
              scaleY: builderAction === 'running' ? [1, 0.3, 1] : 1,
            }}
            transition={{
              duration: 0.15,
              repeat: builderAction === 'running' ? Infinity : 0,
              repeatDelay: 2,
            }}
          >
            <line x1="24" y1="20" x2="20" y2="20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="40" y1="20" x2="36" y2="20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
          
          {/* Motion lines near face when running */}
          {builderAction === 'running' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              <line x1="10" y1="15" x2="5" y2="15" stroke="#ff6b35" strokeWidth="2" />
              <line x1="10" y1="20" x2="3" y2="20" stroke="#ff6b35" strokeWidth="2" />
              <line x1="10" y1="25" x2="5" y2="25" stroke="#ff6b35" strokeWidth="2" />
            </motion.g>
          )}
          
          {/* Mouth */}
          <path d="M25,26 Q30,28 35,26" stroke="#000" strokeWidth="1.5" fill="none" />
          
          {/* Body - Work jacket */}
          <path
            d="M18,30 L18,55 L42,55 L42,30 L38,34 L22,34 Z"
            fill="#4a90e2"
            stroke="#000"
            strokeWidth="2"
          />
          
          {/* Tool belt */}
          <rect x="20" y="48" width="20" height="4" fill="#8b4513" stroke="#000" strokeWidth="1" />
          <rect x="25" y="50" width="4" height="5" fill="#ffd700" stroke="#000" strokeWidth="1" />
          
          {/* Arms */}
          <motion.g
            animate={{
              rotate: builderAction === 'working' ? [0, -15, 0] : 0,
            }}
            style={{ transformOrigin: '20px 35px' }}
            transition={{
              duration: 0.6,
              repeat: builderAction === 'working' ? Infinity : 0,
            }}
          >
            <path d="M18,35 L12,45 L14,50" stroke="#ffdbac" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Tool in hand when working */}
            {builderAction === 'working' && (
              <motion.rect
                x="10"
                y="48"
                width="3"
                height="12"
                fill="#silver"
                stroke="#000"
                strokeWidth="1"
                animate={{ rotate: [0, -20, 0] }}
                style={{ transformOrigin: '11px 48px' }}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
            )}
          </motion.g>
          
          <motion.g
            animate={{
              rotate: builderAction === 'working' ? [0, 15, 0] : builderAction === 'carrying' ? -20 : 0,
            }}
            style={{ transformOrigin: '40px 35px' }}
            transition={{
              duration: 0.6,
              repeat: builderAction === 'working' ? Infinity : 0,
            }}
          >
            <path d="M42,35 L48,45 L46,50" stroke="#ffdbac" strokeWidth="4" fill="none" strokeLinecap="round" />
          </motion.g>
          
          {/* Box when carrying */}
          {builderAction === 'carrying' && (
            <rect x="44" y="40" width="10" height="10" fill="#8b7355" stroke="#000" strokeWidth="1.5" />
          )}
          
          {/* Legs */}
          <motion.g
            animate={{
              rotate: builderAction === 'running' ? [-15, 15] : 0,
            }}
            style={{ transformOrigin: '24px 55px' }}
            transition={{
              duration: 0.2,
              repeat: builderAction === 'running' ? Infinity : 0,
              repeatType: 'reverse',
            }}
          >
            <path d="M24,55 L22,70 L24,75" stroke="#2c5282" strokeWidth="4" fill="none" strokeLinecap="round" />
            <ellipse cx="24" cy="76" rx="5" ry="3" fill="#000" />
          </motion.g>
          
          <motion.g
            animate={{
              rotate: builderAction === 'running' ? [15, -15] : 0,
            }}
            style={{ transformOrigin: '36px 55px' }}
            transition={{
              duration: 0.2,
              repeat: builderAction === 'running' ? Infinity : 0,
              repeatType: 'reverse',
            }}
          >
            <path d="M36,55 L38,70 L36,75" stroke="#2c5282" strokeWidth="4" fill="none" strokeLinecap="round" />
            <ellipse cx="36" cy="76" rx="5" ry="3" fill="#000" />
          </motion.g>
        </svg>
        
        {/* Action Effects */}
        {builderAction === 'running' && (
          <motion.div
            className="absolute -left-12 top-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], x: [-20, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-0.5 bg-orange-400"
                style={{
                  top: `${i * 6}px`,
                  left: `${-i * 4}px`,
                  opacity: 1 - i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.div 
                className="inline-block mb-4 px-4 py-2 border-2 border-orange-500 rounded-lg bg-black/50 backdrop-blur-sm"
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
                <span className="block text-white drop-shadow-lg">CODE</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl">
                  WARRIOR
                </span>
              </h1>

              <div className="flex items-center gap-2 text-xl md:text-2xl text-gray-300 font-mono">
                <span className="text-orange-500">{'>'}</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Building the Future, One Line at a Time
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-xl bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A relentless builder crafting digital experiences in the vast expanse of code. 
              Like a cosmic architect constructing wonders across the universe, turning 
              impossible ideas into reality—24/7, never stopping, always creating.
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
                  <Rocket size={18} />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/10 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Contact
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Visual space for the character animation */}
          <div className="relative h-96 lg:h-full" />
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
