import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';
import RevealOnScroll from './RevealOnScroll';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: 'Aymen Gouacem',
    content: "I went at 3AM for a dental emergency, place is clean, staff is very professional. Minimum to zero waiting time. The doctor was very attentive and explained every step. Did a root canal on my canine, painless and fast. I'm very satisfied, thank you team Cinou Dental.",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Aymen+Gouacem&background=8b5cf6&color=fff&size=128&bold=true', // Purple
    date: 'Il y a 3 mois'
  },
  {
    id: 2,
    name: 'Oogway',
    content: "Great experience at Cinou Dental Clinic. The staff was friendly, and the service was fantastic. The office is clean and modern. I'd highly recommend.",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Oogway&background=10b981&color=fff&size=128&bold=true', // Green
    date: 'Il y a un an'
  },
  {
    id: 3,
    name: 'Imen Lefafta',
    content: "Top",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Imen+Lefafta&background=f43f5e&color=fff&size=128&bold=true', // Rose/Red
    date: 'Il y a 3 mois'
  },
  {
    id: 4,
    name: 'Ramzy Kopp',
    content: "Excellent",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Ramzy+Kopp&background=f59e0b&color=fff&size=128&bold=true', // Orange
    date: 'Il y a un an'
  },
  {
    id: 5,
    name: 'Jashim Uddin',
    content: "Thanks Dr",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Jashim+Uddin&background=3b82f6&color=fff&size=128&bold=true', // Blue
    date: 'Il y a 10 mois'
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#f9f5ff] scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
             <GoogleIcon />
             <span className="font-bold text-gray-700">Avis Google</span>
             <div className="flex gap-0.5 ml-2">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
             </div>
             <span className="text-gray-500 text-sm ml-1 font-medium">4.9/5</span>
          </div>
          <h2 className="text-[#9b00ff] font-bold tracking-wide uppercase text-sm mb-3">Témoignages</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Ils nous font confiance</h3>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((review, index) => (
            <RevealOnScroll key={review.id} delay={index * 100} className="h-full">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{review.name}</h5>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                      alt="Google" 
                      className="w-5 h-5 ml-auto opacity-80"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">"{review.content}"</p>
                <div className="text-xs text-gray-400 font-medium">
                    {review.date}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300} className="text-center mt-12">
            <a 
                href="https://share.google/U4vui0bl4VeFK0Krx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-full font-bold shadow-lg border border-gray-100 hover:bg-gray-50 transition-all hover:scale-105"
            >
                <GoogleIcon />
                Voir tous les avis sur Google
            </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;