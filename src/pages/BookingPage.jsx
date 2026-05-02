import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Calendar, Clock, User, CheckCircle2 } from 'lucide-react';

const BookingPage = () => {
  const container = useRef();
  const [step, setStep] = useState(1);

  useGSAP(() => {
    gsap.from('.booking-anim', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: container });

  const handleBooking = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <section ref={container} className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95 z-10" />
        <img 
          src="/screen3.jpg" 
          alt="Booking background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-4xl">
        {step === 1 ? (
          <>
            <div className="text-center mb-12 booking-anim">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Крок 2</h2>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Деталі запису</h1>
              <p className="text-textMuted">Оберіть зручний час та майстра.</p>
            </div>

            <form onSubmit={handleBooking} className="glass-effect p-8 md:p-12 rounded-sm border-t-4 border-t-accent shadow-2xl booking-anim">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-textMuted uppercase tracking-wider">Оберіть майстра</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent w-5 h-5" />
                    <select className="w-full bg-background border border-white/10 rounded-sm pl-12 pr-6 py-4 text-textMain appearance-none focus:outline-none focus:border-accent transition-colors cursor-pointer">
                      <option>Нікіта Шипілов (Шеф-барбер)</option>
                      <option>Богдан (Топ-барбер)</option>
                      <option>Денис Ніколаєнко (Майстер)</option>
                      <option>Будь-який вільний майстер</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-textMuted uppercase tracking-wider">Дата</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-accent w-5 h-5" />
                    <input type="date" className="w-full bg-background border border-white/10 rounded-sm pl-12 pr-6 py-4 text-textMain focus:outline-none focus:border-accent transition-colors" required />
                  </div>
                </div>

                <div className="space-y-4 md:col-span-2">
                  <label className="block text-sm font-bold text-textMuted uppercase tracking-wider">Час</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:30', '18:00'].map(time => (
                      <div key={time} className="text-center py-3 border border-white/10 rounded-sm hover:border-accent hover:bg-accent/10 cursor-pointer transition-colors text-sm">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-background font-bold py-4 rounded-sm transition-all uppercase tracking-wider mt-6">
                Підтвердити запис
              </button>
            </form>
          </>
        ) : (
          <div className="text-center glass-effect p-12 rounded-sm border-t-4 border-t-accent shadow-2xl booking-anim max-w-2xl mx-auto">
            <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-serif font-bold mb-4">Запис підтверджено!</h1>
            <p className="text-textMuted mb-8">
              Чекаємо вас у нашому барбершопі. Ми надішлемо вам нагадування за годину до візиту.
            </p>
            <a href="/" className="inline-block border border-white/20 hover:bg-white/5 text-textMain font-bold py-3 px-8 rounded-sm transition-all uppercase tracking-wider">
              На головну
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingPage;
