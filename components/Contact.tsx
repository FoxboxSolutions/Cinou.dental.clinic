import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <RevealOnScroll>
             <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prenez rendez-vous dès aujourd'hui</h3>
            <p className="text-gray-600 mb-8">
              Une urgence ou une consultation ? Remplissez le formulaire ou appelez-nous directement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full text-[#9b00ff]">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Téléphone</h5>
                  <p className="text-gray-600">0698 17 34 27</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full text-[#9b00ff]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Adresse</h5>
                  <p className="text-gray-600">Villa Ouraida, en face Mokrani 2,<br/>Ben Aknoun 16000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full text-[#9b00ff]">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email</h5>
                  <p className="text-gray-600">cinou.dental@gmail.com</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full text-[#9b00ff]">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Horaires</h5>
                  <p className="text-gray-600">Sam - Jeu: 09:00 - 18:00</p>
                  <p className="text-gray-600">Ven: Fermé</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form Side */}
          <RevealOnScroll delay={200} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Envoyé !</h4>
                <p className="text-gray-600">Notre équipe vous contactera sous 24h pour confirmer votre rendez-vous.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-[#9b00ff] font-semibold underline">Envoyer un autre message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#9b00ff] focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#9b00ff] focus:border-transparent outline-none transition-all" placeholder="06..." />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#9b00ff] focus:border-transparent outline-none transition-all" placeholder="email@..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type de service</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#9b00ff] focus:border-transparent outline-none transition-all bg-white">
                    <option>Consultation générale</option>
                    <option>Implantologie</option>
                    <option>Esthétique dentaire</option>
                    <option>Urgence</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optionnel)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#9b00ff] focus:border-transparent outline-none transition-all" placeholder="Détails supplémentaires..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#9b00ff] hover:bg-[#8000d6] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;