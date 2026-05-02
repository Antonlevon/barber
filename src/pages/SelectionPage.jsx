import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Scissors, Shield, Star, Crown } from 'lucide-react';

const SelectionPage = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.selection-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  const categories = [
    { id: 1, title: 'Стрижка', desc: 'Класика або сучасний стиль', icon: <Scissors className="w-8 h-8" /> },
    { id: 2, title: 'Борода', desc: 'Моделювання та догляд', icon: <Shield className="w-8 h-8" /> },
    { id: 3, title: 'Комплекс', desc: 'Стрижка + Борода', icon: <Crown className="w-8 h-8" /> },
    { id: 4, title: 'Спеціальне', desc: 'Камуфляж, догляд за шкірою', icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <section ref={container} className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50 z-10" />
        <img 
          src="/screen2.jpg" 
          alt="Selection background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Крок 1</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Оберіть послугу</h1>
          <p className="text-textMuted max-w-xl mx-auto">
            Ми зібрали найкращі рішення для вашого стилю. Оберіть категорію, щоб продовжити бронювання.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <Link 
              to="/book" 
              key={cat.id} 
              className="selection-card group flex flex-col items-center text-center p-8 glass-effect hover:bg-white/10 hover:border-accent/50 transition-all rounded-sm cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">{cat.title}</h3>
              <p className="text-textMuted text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionPage;
