import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Background animated blobs */}
      <div className="bg-blobs">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Abdel. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
