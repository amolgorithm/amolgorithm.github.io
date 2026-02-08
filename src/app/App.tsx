import { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground scrollY={scrollY} />
      <Navigation />
      
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <About scrollY={scrollY} />
        <TechStack scrollY={scrollY} />
        <Projects scrollY={scrollY} />
        <Contact />
      </main>
    </div>
  );
}
