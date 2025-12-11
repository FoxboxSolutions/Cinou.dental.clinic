import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/wF7Zs6SG/470672864-603895628704503-8690754726514460492-n.jpg" 
          alt="Cabinet Cinou Dental Clinic" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/90 to-white/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <RevealOnScroll className="space-y-6">
          <div className="inline-block px-4 py-1 bg-purple-100 text-[#9b00ff] rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            Cabinet Dentaire Premium
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Votre sourire mérite <br />
            <span className="text-[#9b00ff]">l'excellence</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Bienvenue chez Cinou Dental Clinic. Nous allions technologie de pointe et confort absolu pour révéler la beauté de votre sourire. Spécialistes en implants et esthétique dentaire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact"
              className="bg-[#9b00ff] hover:bg-[#8000d6] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-200 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Prendre rendez-vous
            </a>
            <a 
              href="https://wa.me/213698173427" 
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-green-500" />
              Contact WhatsApp
            </a>
          </div>
        </RevealOnScroll>

        {/* Visual Element */}
        <RevealOnScroll delay={200} className="relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://i.ibb.co/Fq8ZJGQJ/2025-04-05.jpg" 
                    alt="Clinic Cinou dental" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">Sans Douleur</p>
                        <p className="text-sm text-gray-500">Technologie Anesthésie Moderne</p>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;