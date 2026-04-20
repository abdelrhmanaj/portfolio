import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Code, FolderGit2, Cpu, Database, LayoutTemplate, Activity, X } from 'lucide-react';

const allProjects = [
  // Hardware & Embedded
  {
    title: 'Door Lock',
    description: 'An embedded systems project simulating a secure door lock mechanism.',
    details: [
      'Developed firmware in C for an embedded microcontroller simulating a security door lock.',
      'Interfaced with peripheral hardware including keypads for input and LCDs for status display.',
      'Implemented a secure state machine for password verification and hardware lockout protocols.',
      'Managed hardware interrupts to ensure real-time responsiveness.'
    ],
    tags: ['C', 'Embedded Systems', 'Microcontrollers'],
    github: 'https://github.com/abdelrhmanaj/Door_Lock',
    category: 'Hardware/Embedded',
    icon: <Cpu size={24} />
  },
  {
    title: 'Custom APB UART IP',
    description: 'A UART peripheral wrapped with an AMBA APB interface for communicating and configuring baud rates via register-based access.',
    details: [
      'Designed a custom Universal Asynchronous Receiver-Transmitter (UART) from scratch using Verilog.',
      'Wrapped the core IP with an AMBA APB (Advanced Peripheral Bus) interface for seamless SOC integration.',
      'Implemented configurable baud rates and parity checking via memory-mapped registers.',
      'Extensively tested using automated testbenches to verify timing and data integrity.'
    ],
    tags: ['Verilog', 'Hardware Design', 'Digital Logic'],
    github: 'https://github.com/abdelrhmanaj/Custom_APB_UART_IP',
    category: 'Hardware/Embedded',
    icon: <Cpu size={24} />
  },
  

  // Machine Learning & Data
  {
    title: 'Item Price Prediction',
    description: 'A Machine Learning model trained to predict store item prices based on historical sales data for a Kaggle competition.',
    details: [
      'Performed extensive Exploratory Data Analysis (EDA) to identify seasonality and pricing trends.',
      'Engineered advanced features utilizing moving averages and lagged variables.',
      'Trained ensemble tree-based models (XGBoost, Random Forest) to minimize Root Mean Squared Logarithmic Error.',
      'Achieved competitive ranking in the Kaggle leaderboard through hyperparameter optimization.'
    ],
    tags: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/abdelrhmanaj/Predict-the-Item-Price-Kaggle-Competition',
    category: 'Machine Learning',
    icon: <Activity size={24} />
  },
  {
    title: 'Data Mining Project',
    description: 'Comprehensive data mining and analysis project using advanced Python techniques.',
    details: [
      'Extracted, cleaned, and preprocessed large unstructured datasets using Pandas and NumPy.',
      'Applied clustering algorithms (K-Means, DBSCAN) to identify hidden data segments.',
      'Utilized association rule mining to discover frequent itemsets and behavioral patterns.',
      'Visualized complex relationships using Matplotlib and Seaborn.'
    ],
    tags: ['Python', 'Jupyter Notebook', 'Data Mining'],
    github: 'https://github.com/abdelrhmanaj/Data_Mining_Project',
    category: 'Machine Learning',
    icon: <Database size={24} />
  },
  {
    title: 'Store Sales Analysis',
    description: 'In-depth exploratory data analysis and forecasting for store sales datasets.',
    details: [
      'Analyzed multi-year sales data to extract actionable business intelligence.',
      'Created time-series forecasting models to predict future inventory requirements.',
      'Designed interactive dashboards to visualize regional performance metrics.',
      'Identified key performance indicators that drive revenue growth.'
    ],
    tags: ['Python', 'Data Analysis', 'Pandas'],
    github: 'https://github.com/abdelrhmanaj/Store-Sales-Dataset-Analysis',
    category: 'Machine Learning',
    icon: <Database size={24} />
  },

  // Core Systems
  {
    title: 'FOS (Faculty OS)',
    description: 'An educational operating system tailored for understanding OS concepts. Refactored version of MIT’s JOS (6.828) lab.',
    details: [
      'Developed core kernel functionality including bootloading, physical memory management, and paging.',
      'Implemented a process scheduler supporting preemptive multitasking.',
      'Engineered system call interfaces to allow user-space applications to safely interact with the kernel.',
      'Refactored and extended MIT’s JOS framework with custom modifications for specific architectural constraints.'
    ],
    tags: ['C', 'Assembly', 'OS Development'],
    github: 'https://github.com/abdelrhmanaj/FOS',
    category: 'Core Systems',
    icon: <FolderGit2 size={24} />
  },
  {
    title: 'Optimal Binary Search Tree',
    description: 'An Optimal Binary Search Tree Initializer and visualizer built from scratch handling complex GCC memory implementations.',
    details: [
      'Designed an algorithmic engine to calculate the optimal structure for a BST given specific access probabilities.',
      'Implemented dynamic programming techniques to minimize search cost from O(n!) to O(n³).',
      'Managed raw memory allocations and pointers manually in C++ to guarantee high performance.',
      'Built a terminal-based visualizer to render the resulting tree structure.'
    ],
    tags: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/abdelrhmanaj/CPP-Optimal-Binary-Search-Tree',
    category: 'Core Systems',
    icon: <Code size={24} />
  },
  {
    title: 'JSON Compiler',
    description: 'A custom parser and compiler for interpreting JSON structures efficiently.',
    details: [
      'Built a custom lexical analyzer (lexer) to tokenize JSON strings into distinct syntactic elements.',
      'Developed a recursive descent parser to construct an Abstract Syntax Tree (AST).',
      'Implemented robust error handling to detect and report malformed JSON syntax.',
      'Optimized memory usage for parsing heavily nested and massive JSON files.'
    ],
    tags: ['C++', 'Compilers', 'Parsing'],
    github: 'https://github.com/abdelrhmanaj/JSON_Compiler_Project',
    category: 'Core Systems',
    icon: <Code size={24} />
  },

  // Web & Dashboards
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution architecture and implementation.',
    details: [
      'Developed a responsive frontend interface using modern React principles.',
      'Implemented a secure backend API for managing user authentication, product catalogs, and orders.',
      'Integrated payment gateway mockups and shopping cart state management.',
      'Utilized RESTful principles for efficient client-server data fetching.'
    ],
    tags: ['JavaScript', 'Web', 'Full-Stack'],
    github: 'https://github.com/abdelrhmanaj/E-commerce',
    category: 'Web & Dashboards',
    icon: <LayoutTemplate size={24} />
  },
  {
    title: 'Reddit Clone',
    description: 'A social media platform replicating core functionalities of Reddit.',
    details: [
      'Built a complex UI featuring nested comment threads, upvoting systems, and subreddit feeds.',
      'Managed global application state using Redux/Context API to handle user sessions and post data.',
      'Implemented infinite scrolling and pagination for efficient content loading.',
      'Designed responsive layouts that adapt beautifully to mobile and desktop displays.'
    ],
    tags: ['Web', 'React', 'Frontend'],
    github: 'https://github.com/abdelrhmanaj/Reddit_Clone',
    category: 'Web & Dashboards',
    icon: <LayoutTemplate size={24} />
  },
  {
    title: 'BI Dashboards',
    description: 'Multiple Business Intelligence dashboards including Car Performance, Grocery Sales, and Superstore Profit analysis.',
    details: [
      'Created comprehensive interactive dashboards using PowerBI/Tableau and Python.',
      'Aggregated fragmented data sources into unified data models for seamless reporting.',
      'Developed geospatial and time-series visualizations to track regional KPIs.',
      'Automated data refresh pipelines to ensure dashboards always display real-time insights.'
    ],
    tags: ['Python', 'BI', 'Data Visualization'],
    github: 'https://github.com/abdelrhmanaj/Central-Superstore-Sales-Profit-Dashboard-',
    category: 'Web & Dashboards',
    icon: <Activity size={24} />
  }
];

const categories = ['All', 'Hardware/Embedded', 'Machine Learning', 'Core Systems', 'Web & Dashboards'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedProject(null);
    }
  };

  return (
    <section id="projects" className="container relative-section">
      <h2 className="heading-lg" style={{ textAlign: 'center' }}>
        <span className="text-gradient">My Arsenal</span>
      </h2>
      
      {/* Category Filter */}
      <div className="filter-container">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="project-card glass animate-fade-in" 
            style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-icon">
              {project.icon}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            {/* The link is still available but clicking the card opens the modal */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <span className="project-link">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content glass">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="project-icon" style={{ marginBottom: 0 }}>
                {selectedProject.icon}
              </div>
              <h3 className="heading-md">{selectedProject.title}</h3>
            </div>
            
            <p className="modal-category" style={{ color: 'var(--accent-1)', fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
              {selectedProject.category}
            </p>
            
            <p className="modal-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {selectedProject.description}
            </p>

            <div className="modal-features" style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Key Highlights:</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="project-tags" style={{ marginBottom: '2rem' }}>
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <a href={selectedProject.github} className="btn btn-primary" target="_blank" rel="noreferrer" style={{ width: '100%' }}>
              <Code size={20} /> View Source Code
            </a>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
