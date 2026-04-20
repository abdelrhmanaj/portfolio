import React from 'react';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';

const projects = [
  {
    title: 'Image Classification App',
    description: 'A machine learning web application that classifies images in real-time using advanced SVM models trained on custom datasets.',
    tags: ['Python', 'Machine Learning', 'React', 'FastAPI'],
    link: '#',
    github: '#'
  },
  {
    title: 'Dynamic Portfolio',
    description: 'A highly interactive and modern portfolio website built with React and Vite, featuring glassmorphism and smooth micro-animations.',
    tags: ['React', 'Vite', 'CSS', 'JavaScript'],
    link: '#',
    github: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and an intuitive admin dashboard.',
    tags: ['Node.js', 'Express', 'React', 'MongoDB'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="heading-lg"><span className="text-gradient">Featured Projects</span></h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-icon">
              <MonitorPlay size={24} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href={project.github} className="project-link">
                <Github size={18} /> Code
              </a>
              <a href={project.link} className="project-link">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
