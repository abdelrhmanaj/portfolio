import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <div className="contact-content glass">
        <h2 className="heading-lg"><span className="text-gradient">Get In Touch</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href="mailto:abdelrhmanaja@gmail.com" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          <Mail size={20} /> Say Hello
        </a>
        
        <div className="social-links">
          <a href="https://github.com/abdelrhmanaj" className="social-link" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdelrhmanaja" className="social-link" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
