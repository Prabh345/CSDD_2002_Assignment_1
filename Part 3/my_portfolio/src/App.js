import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'; // The CSS file

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skills />
      <Interests />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
