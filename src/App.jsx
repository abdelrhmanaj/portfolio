import React, { useEffect, useState } from 'react';
import { Power } from 'lucide-react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import EmbeddedBackground from './components/EmbeddedBackground';

function App() {
  const [theme, setTheme] = useState('system');
  const [isBooted, setIsBooted] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  useEffect(() => {
    // Mouse tracking effect for the glow
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY; // Account for scroll
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Theme application
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'light' : 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleBootSequence = () => {
    setIsBooting(true);
    
    // Web Speech API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Welcome to Abdelrhman's World");
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      window.speechSynthesis.speak(utterance);
    }
    
    // Transition after short delay
    setTimeout(() => {
      setIsBooted(true);
    }, 1500);
  };

  if (!isBooted) {
    return (
      <div className={`boot-screen ${isBooting ? 'fade-out' : ''}`}>
        <EmbeddedBackground />
        <div className="boot-content">
          <h1 className="boot-title">SYSTEM OFFLINE</h1>
          <button className="boot-btn" onClick={handleBootSequence}>
            <Power size={24} /> INITIALIZE SYSTEM
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container animate-fade-in">
      {/* Dynamic Embedded Background */}
      <EmbeddedBackground />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <div className="section-divider"></div>
        <Contact />
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Abdelrhman Mohammed. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
