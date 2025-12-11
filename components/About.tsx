import React from 'react';
import { Target, Heart, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll className="relative">
            <img 
              src="https://i.ibb.co/jkD8wRn7/467182615-582758860818180-4542843246712821394-n.jpg" 
              alt="Équipe Cinou Clinic" 
              className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute inset-0 bg-purple-900/10 rounded-3xl"></div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">À propos de nous</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Une vision moderne de la dentisterie</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chez Cinou Dental Clinic, nous croyons que chaque patient est unique. Notre mission est de vous offrir des soins dentaires d'excellence dans un environnement apaisant, hygiénique et technologiquement avancé. Fini le stress du dentiste !
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl text-[#9b00ff]">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Précision & Technologie</h4>
                  <p className="text-gray-500 text-sm">Équipements de dernière génération pour des diagnostics sûrs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl text-[#9b00ff]">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Confort & Bien-être</h4>
                  <p className="text-gray-500 text-sm">Une approche humaine et des soins garantis sans douleur.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl text-[#9b00ff]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Hygiène Irréprochable</h4>
                  <p className="text-gray-500 text-sm">Protocoles de stérilisation stricts aux normes internationales.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;