import React from 'react';
import { Routes, Route } from 'react-router-dom';

// THIS IS THE IMPORT YOU SAID YOU HAD. IT MUST BE HERE.
import './App.css';

// Import layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Import our "page" components
import HomePage from './components/HomePage';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className='main-container'>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;