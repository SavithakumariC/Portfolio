import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="abt" className="about-viewport py-5">
      <div className="container">
        {/* Header with Radiant Glow */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h3 className="mono-tag">BIOGRAPHY</h3>
          <h2 className="display-4 fw-bold text-white">
            About <span className="name-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="row g-5 align-items-stretch">
          {/* Left Column: Who I Am */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-glass-panel h-100 p-4 p-md-5">
              <div className="constant-ambient-glow"></div>
              <h3 className="category-label mb-4">
                <i className="bi bi-person-badge me-2 radiant-icon"></i> Who I Am
              </h3>
              <p className="about-description">
                I am a passionate <span className="highlight-blue">Frontend Developer</span> dedicated to crafting 
                visually stunning and highly functional digital experiences. With a sharp eye for 
                responsive design, I bridge the gap between complex code and intuitive user interfaces.
              </p>
              <p className="about-description">
                My journey is fueled by continuous learning. Currently 
                transitioning towards a <span className="name-gradient">MERN Stack</span> expert, 
                I focus on building scalable web applications with clean code 
                and modern architecture.
              </p>
              
<div className="mt-4">
  <motion.button 
    className="theme-gradient-btn px-4 py-2"
    // Synced animation from Projects "Live Demo"
    animate={{ 
      boxShadow: ["0 0 5px #38bdf8", "0 0 20px #38bdf8", "0 0 5px #38bdf8"] 
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity 
    }}
    whileHover={{ 
      scale: 1.05, 
      filter: "brightness(1.2)" 
    }}
    whileTap={{ scale: 0.95 }}
  >
    My Vision <i className="bi bi-arrow-right ms-2"></i>
  </motion.button>
</div>
            </div>
          </motion.div>

          {/* Right Column: Experience */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-glass-panel h-100 p-4 p-md-5">
              <div className="constant-ambient-glow"></div>
              <h3 className="category-label mb-4">
                <i className="bi bi-briefcase me-2 radiant-icon"></i> Experience
              </h3>
              
              <div className="experience-timeline">
                <TimelineItem 
                  role="Frontend Web Designer" 
                  company="The LeadersBoat" 
                  date="Jun 2024 - Nov 2024" 
                />
                <TimelineItem 
                  role="React.js Developer Intern" 
                  company="Nutz Technovation" 
                  date="Feb 2024 - May 2024" 
                />
                <TimelineItem 
                  role="FullStack Diploma" 
                  company="Microdots Education" 
                  date="May 2023 - Feb 2024" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ role, company, date }) => (
  <motion.div 
    className="timeline-item mb-4"
    whileHover={{ x: 10 }}
  >
    <motion.div 
       className="timeline-dot"
       animate={{ boxShadow: ["0 0 5px #38bdf8", "0 0 15px #38bdf8", "0 0 5px #38bdf8"] }}
       transition={{ repeat: Infinity, duration: 2 }}
    ></motion.div>
    <div className="timeline-content">
      <h5 className="job-role text-white mb-1">{role}</h5>
      <p className="company-name mb-0">{company}</p>
      <span className="job-duration small">{date}</span>
    </div>
  </motion.div>
);

export default About;