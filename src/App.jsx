import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Add some global intersection observer or scroll logic if needed,
  // but individual components manage their animations via Framer Motion whileInView.

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
