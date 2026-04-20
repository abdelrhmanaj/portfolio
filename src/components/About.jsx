import React from 'react';

const skills = [
  'C++', 'Python', 'JavaScript/React', 'Operating Systems',
  'Machine Learning', 'Data Mining', 'Software Engineering'
];

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="heading-lg"><span className="text-gradient">About Me</span></h2>
      
      <div className="about-grid">
        <div className="about-text glass" style={{ padding: '2rem' }}>
          <p>
            Hello! My name is Abdelrhman Mohammed. I am a highly motivated software engineer
            with a strong foundation in low-level systems programming and high-level application development.
          </p>
          <p>
            I have hands-on experience developing complex projects ranging from educational 
            operating systems (like my work on FOS, derived from MIT's JOS) to machine learning 
            competitions on Kaggle, and advanced C++ visualizers. My focus is on creating 
            efficient, scalable, and well-architected solutions.
          </p>
        </div>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>Core Competencies:</h3>
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
