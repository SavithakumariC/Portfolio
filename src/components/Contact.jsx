import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const socials = [
    { icon: 'github', link: 'https://github.com/SavithakumariC', color: '#f8fafc' }, 
    { icon: 'linkedin', link: 'https://linkedin.com/in/savithakumari-c-148b58256', color: '#0077b5' }, 
    { icon: 'instagram', link: 'https://instagram.com/kitty_savitha/', color: '#e1306c' }, 
    { icon: 'envelope-at', link: 'mailto:savithakumari@example.com', color: '#38bdf8' } 
  ];

  return (
    <section id="contact" className="contact-viewport py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="mono-tag">SAY HELLO</h3>
          <h2 className="display-4 fw-bold text-white">
            Get In <span className="name-gradient">Touch</span>
          </h2>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="contact-info-box p-3">
              <h3 className="connect-title mb-4">Let's Connect</h3>
              <p className="contact-text mb-5">
                Your thoughts, ideas, or feedback mean a lot to me. Whether it's 
                a project inquiry or just a friendly hello, my inbox is always open!
              </p>
              
              <div className="social-flex-container d-flex gap-4">
                {socials.map((item, idx) => (
                  <motion.a 
                    key={idx}
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-icon-raw"
                    style={{ '--brand-color': item.color }}
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: idx * 0.3,
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <i className={`bi bi-${item.icon}`}></i>
                    <span className="spinning-ring"></span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <motion.div 
              className="glass-card-simple p-4 p-md-5"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ animationPlayState: "paused" }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="simple-input-group mb-4">
                  <input type="text" placeholder="Full Name" required />
                </div>
                
                <div className="simple-input-group mb-4">
                  <input type="email" placeholder="Email Address" required />
                </div>

                <div className="simple-input-group mb-4">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(56, 189, 248, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="theme-gradient-btn w-100"
                >
                  SEND MESSAGE <i className="bi bi-send-fill ms-2"></i>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;