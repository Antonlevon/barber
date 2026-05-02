import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Олексій',
      text: '«Нарешті знайшов місце, де барбер не "жене" за 25 хвилин заради наступного клієнта. Майстер возився годину, вивів ідеальну потилицю. Сервіс топ, віскі чудовий!»'
    },
    {
      name: 'Дмитро',
      text: '«Завжди боявся, що не зможу пояснити, чого хочу. Тут просто показали лукбук, підібрали варіант під мій тип волосся, і результат реально порадував. Інструменти відкривали при мені».'
    },
    {
      name: 'Іван',
      text: '«Чесна ціна без прихованих доплат за укладання чи миття. Все включено, атмосфера як у фільмах про джентльменів. Тепер тільки сюди».'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Відгуки</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Жива мова клієнтів</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 glass-effect rounded-sm relative mt-8">
              <div className="absolute -top-6 left-8 p-3 bg-accent text-background rounded-full">
                <Quote className="w-6 h-6" fill="currentColor" />
              </div>
              <p className="text-textMuted leading-relaxed italic mb-8 mt-4">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-textMuted">Постійний клієнт</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
