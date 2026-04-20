import React from 'react';
import { Phone, MessageCircle, Mail, Briefcase, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container contact-section">
      <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span className="text-gradient">Get In Touch</span>
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Interested in collaborating on embedded systems, machine learning, or software engineering? Let's connect!
      </p>

      <div className="contact-grid">
        {/* Phone */}
        <a href="tel:+201020187889" className="contact-card glass">
          <div className="contact-icon">
            <Phone size={28} />
          </div>
          <h3 className="contact-title">Call Me</h3>
          <p className="contact-value">+20 102 018 7889</p>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/201020187889" target="_blank" rel="noreferrer" className="contact-card glass">
          <div className="contact-icon" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}>
            <MessageCircle size={28} />
          </div>
          <h3 className="contact-title">WhatsApp</h3>
          <p className="contact-value">+20 102 018 7889</p>
        </a>

        {/* Email */}
        <a href="mailto:abdelrhmanaj@example.com" className="contact-card glass">
          <div className="contact-icon">
            <Mail size={28} />
          </div>
          <h3 className="contact-title">Email</h3>
          <p className="contact-value">Send a message</p>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/abdelrhmanaj" target="_blank" rel="noreferrer" className="contact-card glass">
          <div className="contact-icon" style={{ color: '#0077b5', background: 'rgba(0, 119, 181, 0.1)' }}>
            <Briefcase size={28} />
          </div>
          <h3 className="contact-title">LinkedIn</h3>
          <p className="contact-value">Professional Profile</p>
        </a>

        {/* GitHub */}
        <a href="https://github.com/abdelrhmanaj" target="_blank" rel="noreferrer" className="contact-card glass">
          <div className="contact-icon" style={{ color: 'var(--text-primary)', background: 'rgba(128, 128, 128, 0.1)' }}>
            <Globe size={28} />
          </div>
          <h3 className="contact-title">GitHub</h3>
          <p className="contact-value">@abdelrhmanaj</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
