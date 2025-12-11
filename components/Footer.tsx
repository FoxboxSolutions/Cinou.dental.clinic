import React from 'react';
import Logo from './Logo';

// SVG Icons for brands not available in generic Lucide packages
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre clinique dentaire de référence pour des soins d'excellence, alliant technologie de pointe et confort absolu.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/cinou.dental" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="https://www.instagram.com/cinou_dental_clinic/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="https://www.tiktok.com/@cinoudentalclinic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TikTokIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-[#9b00ff] transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-[#9b00ff] transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-[#9b00ff] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#9b00ff] transition-colors">Rendez-vous</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-[#9b00ff] transition-colors">Implants Dentaires</a></li>
              <li><a href="#services" className="hover:text-[#9b00ff] transition-colors">Esthétique & Facettes</a></li>
              <li><a href="#services" className="hover:text-[#9b00ff] transition-colors">Détartrage & Hygiène</a></li>
              <li><a href="#services" className="hover:text-[#9b00ff] transition-colors">Urgences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Légal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#9b00ff] transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#9b00ff] transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#9b00ff] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cinou Dental Clinic. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;