import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BookingModal from './BookingModal';

const Hero = () => {
  const container = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-bg', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    })
    .from('.hero-element', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.8'); // start earlier relative to the bg animation
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <img 
          src="/screen1.jpg" 
          alt="Barbershop background" 
          className="hero-bg w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="hero-element text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Виправимо погану стрижку: <br />
            <span className="text-accent italic font-normal">ваш бездоганний образ</span> за один візит.
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-textMuted mb-10 max-w-xl leading-relaxed">
            Барбершоп у центрі Києва, де майстер не поспішає та працює на результат, а не на потік. 
            Стрижемо 60 хвилин, приділяючи увагу кожній деталі та вашому комфорту.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent hover:bg-accent/90 text-background font-bold py-4 px-8 rounded-sm text-center transition-all uppercase tracking-wider"
            >
              Записатися онлайн
            </button>
            <a href="#services" className="border border-white/20 hover:bg-white/5 text-textMain font-bold py-4 px-8 rounded-sm text-center transition-all uppercase tracking-wider">
              Наші послуги
            </a>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
