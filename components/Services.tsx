import React from 'react';
import { ArrowRight, HeartPulse, Layers, Sparkles, ShieldPlus, Sun, Scan, Smile } from 'lucide-react';
import { Service } from '../types';
import RevealOnScroll from './RevealOnScroll';

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
    description: 'Correction de l\'alignement dentaire pour enfants et adultes. Nous proposons des solutions modernes pour redresser vos dents et harmoniser votre occlusion.',
    icon: <Smile size={32} />,
    benefits: ['Alignement parfait', 'Solutions invisibles', 'Suivi personnalisé']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">Nos Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Une gamme complète de soins pour toute la famille</h3>
          <p className="text-gray-600">
            De la prévention aux réhabilitations complexes, nous couvrons l'ensemble des spécialités dentaires sous un même toit.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 100} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#9b00ff] mb-6 group-hover:bg-[#9b00ff] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 border-t border-gray-100 pt-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;