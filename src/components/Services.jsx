import React, { useRef } from 'react';
import { Scissors, Activity, Coffee } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Чоловіча стрижка без «сюрпризів»',
      desc: 'Набридло перестригатися після інших майстрів? Ми підберемо форму під ваш тип обличчя та обов’язково покажемо результат ззаду, щоб ви пішли задоволеним на 100%.',
      price: '800 ₴',
      icon: <Scissors className="w-6 h-6 text-accent" />
    },
    {
      id: '02',
      title: 'Моделювання бороди та вусів',
      desc: 'Борода виглядає неохайно або колеться? Створимо чіткий контур та підберемо преміальний догляд на основі олій, що зробить щетину м\'якою та слухняною.',
      price: '500 ₴',
      icon: <Activity className="w-6 h-6 text-accent" />
    },
    {
      id: '03',
      title: 'Спецпропозиція «Спина ІТ-шника»',
      desc: 'Затекла спина після 8 годин за кодом? Унікальна для Києва послуга масажу в барбершопі поверне вам бадьорість та легкість за 45 хвилин.',
      price: '700 ₴',
      icon: <Coffee className="w-6 h-6 text-accent" />
    }
  ];
  
  const container = useRef();

  useGSAP(() => {
    gsap.from('.service-item', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Наші послуги</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Рішення ваших болей</h3>
          </div>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="service-item group flex flex-col md:flex-row gap-6 md:gap-12 p-8 glass-effect hover:bg-white/10 transition-colors border-l-4 border-l-transparent hover:border-l-accent rounded-r-sm">
              <div className="flex items-center gap-6 md:w-1/3">
                <span className="text-4xl font-serif font-bold text-white/10 group-hover:text-accent/20 transition-colors">{service.id}</span>
                <div className="p-4 bg-white/5 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h4 className="text-2xl font-serif font-bold mb-3">{service.title}</h4>
                <p className="text-textMuted leading-relaxed">{service.desc}</p>
              </div>
              <div className="md:w-1/6 flex items-center md:justify-end">
                <span className="text-2xl font-bold text-accent">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
