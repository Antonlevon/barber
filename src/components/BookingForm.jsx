import React, { useState } from 'react';
import BookingModal from './BookingModal';

const BookingForm = () => {
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section id="booking" className="py-24 bg-card border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-effect p-8 md:p-12 rounded-sm border-t-4 border-t-accent shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Готові до змін, які вам сподобаються?</h3>
            <p className="text-textMuted leading-relaxed max-w-2xl mx-auto">
              Залиште свій номер, і ми підберемо зручний час до майстра, який спеціалізується саме на вашому типі волосся. 
              Після першого візиту ви забудете про пошуки "свого" барбера.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 relative z-10 max-w-2xl mx-auto">
            <input 
              type="tel" 
              placeholder="+380 (__) ___-__-__" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-background border border-white/10 rounded-sm px-6 py-4 text-textMain focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button type="submit" className="bg-accent hover:bg-accent/90 text-background font-bold py-4 px-8 rounded-sm transition-all uppercase tracking-wider">
              Чекаю дзвінка
            </button>
          </form>
          
          <p className="text-center text-xs text-textMuted mt-6">
            Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
          </p>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BookingForm;
