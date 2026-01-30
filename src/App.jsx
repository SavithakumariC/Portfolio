import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="radiant-bg">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-4 border-top border-secondary mt-5">
        <p>© 2025 MyPortfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;