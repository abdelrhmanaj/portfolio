import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content animate-fade-in">
        <span className="hero-subtitle">Hello, I'm Abdel</span>
        <h1 className="heading-xl">
          Crafting <span className="text-gradient">digital experiences</span> that inspire.
        </h1>
        <p className="hero-description">
          I'm a passionate developer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
