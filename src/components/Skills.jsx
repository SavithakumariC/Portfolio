import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Layers, Code2, Cpu, Terminal, 
  Database, Wrench, Github, Server, 
  Link2, Share2, Cloud, Layout 
} from 'lucide-react';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: 'HTML', icon: <Globe />, color: '#E34F26' },
      { name: 'CSS', icon: <Layers />, color: '#1572B6' },
      { name: 'JS', icon: <Code2 />, color: '#F7DF1E' },
      { name: 'React', icon: <Cpu />, color: '#61DAFB' },
      { name: 'Bootstrap', icon: <Layout />, color: '#7952B3' },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: 'Node.js', icon: <Terminal />, color: '#339933' },
      { name: 'Express.js', icon: <Server />, color: '#ffffff' },
      { name: 'MongoDB', icon: <Database />, color: '#47A248' },
      { name: 'Mongoose', icon: <Database />, color: '#880000' },
      { name: 'REST APIs', icon: <Link2 />, color: '#00d2ff' },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: 'VS Code', icon: <Code2 />, color: '#007ACC' },
      { name: 'GitHub', icon: <Github />, color: '#ffffff' },
      { name: 'Netlify', icon: <Cloud />, color: '#00C7B7' },
      { name: 'Render', icon: <Share2 />, color: '#46E3B7' },
      { name: 'ThunderClient', icon: <Wrench />, color: '#7547D1' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-viewport py-5">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="skills-main-title text-center mb-5"
        >
          Technical <span className="radiant-text">Stacks</span>
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              className="col-lg-4 col-md-6 col-sm-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="category-card h-100">
                <h3 className="category-heading mb-5 text-center">{cat.title}</h3>
                
                <div className="skills-grid-inner">
                  {cat.skills.map((skill, i) => (
                    <div className="skill-item-container" key={i} style={{ '--clr': skill.color }}>
                      <div className="icon-sphere">
                        {skill.icon}
                        <span className="spinning-ring"></span>
                      </div>
                      <span className="skill-text-label">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;