import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  { 
    id: 1, 
    image: 'https://i.ibb.co/ksyxPbNQ/467466657-582764247484308-7498945405611680464-n.jpg', 
    title: 'Implant Complet',
    description: "Restauration complète de la dentition avec des implants de dernière génération. Le patient a retrouvé une fonction masticatoire parfaite et un sourire esthétique.",
    duration: '6 mois',
    painLevel: 'Modérée (sous anesthésie)'
  },
  { 
    id: 2, 
    image: 'https://scontent.falg7-1.fna.fbcdn.net/v/t39.30808-6/474627387_628881116317454_5374568517335544474_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6PDZ2xgAGB0HejMH4_5u2sMYuopvJOLOwxi6im8k4s9MwhttqjEqFglI9UI7fL1mU7MTlU6KgPZgSutvApIQV&_nc_ohc=qdrfX3vZHDsQ7kNvwHra7dE&_nc_oc=AdnufJssqwmrlgdtKW8YH2gMBKATmWRNGUPXjhifoIbxcimETMjFh0Ckkxi6l6X4tdk&_nc_zt=23&_nc_ht=scontent.falg7-1.fna&_nc_gid=pw_i4GaowYg53T8FuVIOtQ&oh=00_AflTESo_tlK-8WCulHt1PyC9oK9SIpSelxXBXzReRuAm6g&oe=69404E4A', 
    title: 'Blanchiment Dentaire',
    description: "Éclaircissement significatif de la teinte des dents grâce à notre protocole de blanchiment au fauteuil. Résultat immédiat et éclatant.",
    duration: '1h30',
    painLevel: 'Aucune'
  },
  { 
    id: 3, 
    image: 'https://scontent.falg6-2.fna.fbcdn.net/v/t39.30808-6/479189467_642509551621277_7599189939226234496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH5NEocfrfjt7uR1NhMNjadPbLU_xoC1Yg9stT_GgLViKoBJkg1OXwXlDndQn9nAlVhREb6FVzUNH3X9Cvas4wh&_nc_ohc=_0394XNYs9QQ7kNvwGXFl9r&_nc_oc=Adn1Hc0Sp3B1LvSwgTUWtmwAsscJJKsnTWBr67P3cRkzzESVzFUSNvVYo9RurXeM2cs&_nc_zt=23&_nc_ht=scontent.falg6-2.fna&_nc_gid=u6jQ19QI3L8sqKhqRcOPug&oh=00_AfnKsaBr3m8kXwdwCRNG89oGXz_xZrUW5tYaMGcBC2kVIg&oe=69404568', 
    title: 'Facettes Céramiques',
    description: "Pose de facettes pour corriger la forme et la teinte des dents. Un sourire hollywoodien sur mesure, conçu pour durer.",
    duration: '2 séances',
    painLevel: 'Minime'
  }
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => setActiveTab((prev) => (prev + 1) % cases.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">Réalisations</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Résultats Cliniques</h3>
            <p className="text-gray-600 mt-4">Découvrez les sourires transformés par notre équipe.</p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button onClick={prevTab} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextTab} className="p-3 rounded-full bg-[#9b00ff] text-white hover:bg-[#8000d6] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-lg">
          <div className="grid md:grid-cols-2">
             {/* Image Side */}
             <div className="relative h-[300px] md:h-[500px]">
                <img 
                  src={cases[activeTab].image} 
                  alt={cases[activeTab].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#9b00ff] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  RÉSULTAT
                </div>
             </div>

             {/* Content Side */}
             <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#9b00ff] font-semibold text-sm mb-2 uppercase tracking-wider">
                    Étude de cas
                </span>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">{cases[activeTab].title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {cases[activeTab].description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
                   <div>
                      <p className="text-sm text-gray-500 mb-1">Durée du traitement</p>
                      <p className="font-semibold text-gray-900">{cases[activeTab].duration}</p>
                   </div>
                   <div>
                      <p className="text-sm text-gray-500 mb-1">Niveau de confort</p>
                      <p className="font-semibold text-gray-900">{cases[activeTab].painLevel}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;