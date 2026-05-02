import React, { useRef } from 'react';
import { Clock, ShieldCheck, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Trust = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-accent mb-4" />,
      title: '12 років досвіду',
      desc: 'Працюємо у Києві з 2012 року, зберігаючи традиції класичної чоловічої стрижки та гоління.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent mb-4" />,
      title: '3 етапи стерилізації',
      desc: 'Інструменти проходять медичну дезінфекцію та УФ-обробку після кожного клієнта — безпека в пріоритеті.'
    },
    {
      icon: <Award className="w-8 h-8 text-accent mb-4" />,
      title: '10 нагород «Вибір року»',
      desc: 'Наша мережа визнана найкращою в Україні завдяки стабільній якості та сервісу.'
    }
  ];
  
  const container = useRef();

  useGSAP(() => {
    gsap.from('.trust-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="trust-card flex flex-col items-center text-center p-6 glass-effect rounded-sm hover:border-accent/30 transition-colors">
              {stat.icon}
              <h3 className="font-serif text-xl font-bold mb-3">{stat.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
