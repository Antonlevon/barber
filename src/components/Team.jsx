import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Team = () => {
  const team = [
    {
      name: 'Нікіта Шипілов',
      role: 'Шеф-барбер',
      desc: 'Експерт із математичною точністю підбору стилю. Спеціалізується на складних образах, що ідеально вписуються у ваш ритм життя та роботи.',
      img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Богдан',
      role: 'Топ-барбер',
      desc: 'Майстер філігранного «фейду» та роботи з інструментом Ferrari. Його стрижки тримають форму на тиждень довше, ніж ви звикли.',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Денис Ніколаєнко',
      role: 'Майстер класики',
      desc: 'Прихильник старої школи. Створює стрижки, що виглядають бездоганно навіть зранку без довгого укладання перед дзеркалом.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
    }
  ];
  
  const container = useRef();

  useGSAP(() => {
    gsap.from('.team-member', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="team" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Команда</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Наші майстри</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="team-member group relative overflow-hidden rounded-sm">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-accent text-sm font-bold tracking-wider uppercase mb-2">{member.role}</p>
                <h4 className="text-2xl font-serif font-bold mb-4">{member.name}</h4>
                <p className="text-textMuted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
