import React from 'react';
import { ArrowRight, HeartPulse, Layers, Sparkles, ShieldPlus, Sun, Scan, Smile } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 'soins-urgence',
    title: 'Soins Dentaires & Urgence',
    description: 'Prise en charge immédiate de vos douleurs et soins conservateurs complets (traitement des caries, dévitalisation). Nous intervenons rapidement pour soulager vos maux de dents et stopper les infections.',
    icon: <HeartPulse size={32} />,
    benefits: ['Disponibilité rapide', 'Soulagement immédiat', 'Soins sans douleur']
  },
  {
    id: 'prothese',
    title: 'Prothèse Fixe & Amovible',
    description: 'Restauration fonctionnelle et esthétique de votre dentition. Que ce soit par couronnes, bridges ou dentiers, nous utilisons des matériaux de haute qualité pour un confort de mastication retrouvé.',
    icon: <Layers size={32} />,
    benefits: ['Matériaux durables', 'Confort optimal', 'Esthétique naturelle']
  },
  {
    id: 'detartrage-chirurgie',
    title: 'Détartrage & Chirurgie Esthétique',
    description: 'L\'alliance parfaite entre santé et beauté. Le détartrage prévient les maladies parodontales, tandis que la chirurgie esthétique des gencives harmonise votre sourire (alignement gingival).',
    icon: <Sparkles size={32} />,
    benefits: ['Haleine fraîche', 'Gencives saines', 'Sourire harmonieux']
  },
  {
    id: 'implantologie',
    title: 'Implantologie',
    description: 'La solution de référence pour remplacer une ou plusieurs dents manquantes. Nos implants en titane ou zircone s\'intègrent parfaitement à l\'os pour un résultat stable à vie, indiscernable de vos vraies dents.',
    icon: <ShieldPlus size={32} />,
    benefits: ['Solution à vie', 'Préservation osseuse', 'Sensation naturelle']
  },
  {
    id: 'blanchiment',
    title: 'Blanchiment Dentaire',
    description: 'Illuminez votre visage grâce à nos techniques de blanchiment professionnelles. Un protocole sûr et efficace pour gagner plusieurs teintes et retrouver un sourire éclatant de jeunesse.',
    icon: <Sun size={32} />,
    benefits: ['Éclat immédiat', 'Sécurité de l\'émail', 'Résultat durable']
  },
  {
    id: 'radio',
    title: 'Radio Dentaire',
    description: 'Diagnostic de précision grâce à notre équipement d\'imagerie numérique (Panoramique, Scanner 3D). Indispensable pour détecter les pathologies invisibles et planifier vos soins en toute sécurité.',
    icon: <Scan size={32} />,
    benefits: ['Diagnostic précis', 'Faible radiation', 'Résultat instantané']
  },
  {
    id: 'odf',
    title: 'ODF (Orthodontie)',
    description: 'Correction de l\'alignement dentaire pour enfants et adultes (Orthodontie Dento-Faciale). Des bagues traditionnelles aux aligneurs invisibles, nous redressons vos dents pour une fonction et une esthétique parfaites.',
    icon: <Smile size={32} />,
    benefits: ['Alignement parfait', 'Solutions invisibles', 'Prévention fonctionnelle']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">Nos Expertises</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Une offre de soins complète</h3>
          <p className="text-gray-600">
            Du diagnostic radiologique à la réhabilitation complète du sourire, Cinou Dental Clinic maîtrise l'ensemble des disciplines dentaires modernes pour votre santé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group w-full h-full flex flex-col">
              <div className="w-14 h-14 bg-purple-50 text-[#9b00ff] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#9b00ff] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-500 font-medium">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center text-[#9b00ff] font-semibold text-sm hover:underline mt-auto">
                Prendre rendez-vous <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;