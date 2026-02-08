import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function AnimatedBackground({ scrollY }: { scrollY: number }) {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      });
    }
    setStars(newStars);

    // Space dust particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 2 + 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      {/* Nebula Effects */}
      <motion.div
        className="absolute top-0 right-0 w-[1000px] h-[1000px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 107, 53, 0.3) 0%, rgba(255, 140, 66, 0.2) 25%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)`,
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 107, 53, 0.25) 0%, rgba(255, 165, 0, 0.15) 30%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />

      {/* Cosmic Dust Cloud */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 140, 66, 0.3) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Distant Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: `radial-gradient(circle, rgba(255, ${140 + Math.random() * 60}, ${Math.random() * 100 + 50}, 0.9) 0%, transparent 70%)`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Space Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-orange-300/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + particle.vx * 100}%`],
            y: [`${particle.y}%`, `${particle.y + particle.vy * 100}%`],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Atmospheric Glow at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255, 107, 53) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255, 107, 53) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 107, 53, 0.02) 2px, rgba(255, 107, 53, 0.02) 4px)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
