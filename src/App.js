import React from 'react';
import Navbar from './Components/Pages/Nav';
import Hero from './Components/Pages/Hero ';
import About from './Components/Pages/About';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className='bg-white dark:bg-slate-800 flex flex-col items-center justify-between'>
      <Navbar />

      <Hero />

      <About />

      <Projects />
      
      <Skills /> {/* Add the Skills component here before Contact */}

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
