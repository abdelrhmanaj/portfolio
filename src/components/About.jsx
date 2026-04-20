import React from 'react';

const skills = [
  'JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript',
  'Python', 'HTML & CSS', 'Vite', 'Machine Learning'
];

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="heading-lg"><span className="text-gradient">About Me</span></h2>
      
      <div className="about-grid">
        <div className="about-text glass" style={{ padding: '2rem' }}>
          <p>
            Hello! My name is Abdel and I enjoy creating things that live on the internet.
            My interest in web development and software engineering started back when I 
            decided to try editing custom themes for my personal projects.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working on a variety 
            of complex projects, from dynamic front-end applications to machine learning models. 
            My main focus these days is building accessible, inclusive products and 
            digital experiences.
          </p>
        </div>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>Technologies I've been working with:</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill glass">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
