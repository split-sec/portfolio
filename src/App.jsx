import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import BodySection from './components/BodySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  const [ theme, setTheme ] = useState(true);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
      <BodySection theme={theme}/>
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default App
