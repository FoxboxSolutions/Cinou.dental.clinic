import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Fixed Widgets */}
      <WhatsAppButton />
      {/* Hidden on small mobile to avoid overlap, or stacked above */}
      <div className="hidden md:block">
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;