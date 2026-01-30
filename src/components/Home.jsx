import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; // Import the library
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-viewport d-flex align-items-center">
      <div className="constant-ambient-glow top-left"></div>
      <div className="constant-ambient-glow bottom-right"></div>
      
      <div className="container hero-container py-5">
        <div className="row align-items-center g-5">
          
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="badge-modern-small mb-3 mx-auto mx-lg-0">
                <span className="timeline-dot-static"></span>
                <span className="mono-text-small">AVAILABLE FOR HIRE</span>
              </div>
              
              <h3 className="category-label mb-2 radiant-icon">/ FRONTEND DEVELOPER</h3>
              
              <h1 className="hero-title">
  <span className="job-duration">Hi, I am</span> <br />
  <span className="display-text crystal-white-name">
    <Typewriter
      options={{
        autoStart: true,
        loop: false,
        delay: 250, // Very slow and deliberate
        cursor: '|',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Savithakumari C')
          .start()
          .callFunction(() => {
            // Removes the cursor once typing is finished
            const cursor = document.querySelector('.Typewriter__cursor');
            if (cursor) cursor.style.display = 'none';
          });
      }}
    />
  </span>
</h1>
              
              <p className="about-description mt-3">
                Building clean, responsive user interfaces using{' '}
                <span className="highlight-blue">React</span>. Focused on
                practical learning and continuous skill improvement 💻.
              </p>

              <div className="mt-4">
                <motion.button 
                  className="theme-gradient-btn px-4 py-2"
                  animate={{ 
                    boxShadow: ["0 0 5px #38bdf8", "0 0 20px #38bdf8", "0 0 5px #38bdf8"] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
<a href="#contact" className="contact-btn-link">
  Get In Touch <i className="bi bi-chat-dots ms-2"></i>
</a>

                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2">
            <motion.div 
              className="profile-aura-container"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="profile-backdrop-filter"></div>
              <div className="profile-image-frame">
                <img
                  src="/images/profile.jpg"
                  alt="Savithakumari C"
                  className="profile-img-main"
                />
                <div className="glossy-overlay"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;