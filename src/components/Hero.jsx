import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content animate-fade-in">
        <span className="hero-subtitle">Hello, I'm Abdelrhman Mohammed</span>
        <h1 className="heading-xl">
          Crafting <span className="text-gradient">digital solutions</span> that perform.
        </h1>
        <p className="hero-description">
          I'm a passionate software engineer with a deep interest in operating systems, 
          machine learning, and full-stack development. I build robust and efficient systems.
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
