import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Expense Tracker 💰",
      desc: "A full-stack MERN Expense Tracker to manage income and expenses, view total balance dynamically and maintain a transaction history.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://expense-tracker-frontend-zdws.onrender.com/",
      github: "https://github.com/SavithakumariC/Expense_Tracker",
      img: "./images/expenseTracker.png"
    },
    {
      id: 2,
      title: "TODO List",
      desc: "Fully responsive shopping interface with dynamic filtering, real-time cart updates, and a glass-morphism design language.",
      tech: ["React", "Bootstrap", "Javascript", "DOM"],
      link: "https://taskplannertodo.netlify.app/",
      github: "https://github.com/SavithakumariC/my_todo_web/",
      img: "./images/todoList.png"
    },
    {
      id: 3,
      title: "PawHeart India 🐾",
      desc: "A responsive NGO-style website created for PawHeart India using HTML, CSS, and JavaScript with DOM interactions to support pet adoption and animal welfare awareness.",
      tech: ["HTML", "CSS", "JavaScript", "DOM"],
      link: "https://pawheart.netlify.app/",
      github: "https://github.com/SavithakumariC/Pawheart-India",
      img: "./images/pawheart.png"
    }
  ];

  return (
    <section id="projects" className="projects-viewport py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="mono-tag">PORTFOLIO</h3>
          <h2 className="display-4 fw-bold text-white">
            Featured <span className="name-gradient">Projects</span>
          </h2>
        </div>

        <div className="row g-5">
          {projectList.map((p, idx) => (
            <motion.div
              key={p.id} className="col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="project-neon-card">
                <div className="constant-glow"></div>

                <div className="project-img-wrapper">
                  <img src={p.img} alt={p.title} className="project-img" />

                  {/* Tech stack positioned at bottom-left corner */}
                  <div className="tech-stack-corner">
                    {p.tech.map((t, i) => (
                      <span key={i} className="tech-badge-outline">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="p-title">{p.title}</h3>
                  <p className="p-desc">{p.desc}</p>

                  <div className="p-actions">
                    <motion.a
                      href={p.link} target="_blank" className="live-btn"
                      animate={{ boxShadow: ["0 0 5px #38bdf8", "0 0 20px #38bdf8", "0 0 5px #38bdf8"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      LIVE DEMO <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </motion.a>

                    <motion.a
                      href={p.github} target="_blank" className="git-btn"
                      animate={{ border: ["1px solid rgba(255,255,255,0.1)", "1px solid #818cf8", "1px solid rgba(255,255,255,0.1)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <i className="bi bi-github"></i>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;