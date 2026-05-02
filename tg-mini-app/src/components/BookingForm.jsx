import React, { useState, useEffect } from 'react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';

const BookingForm = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const { user, showMainButton, hideMainButton, sendData, showAlert } = useTelegramWebApp();

  useEffect(() => {
    // Pre-fill name from Telegram user data
    if (user) {
      const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ');
      setName(fullName);
    }
  }, [user]);

  useEffect(() => {
    // Show/hide main button based on form validity
    if (phone && name && service) {
      showMainButton('Записатися', handleSubmit);
    } else {
      hideMainButton();
    }

    return () => hideMainButton();
  }, [phone, name, service]);

  const handleSubmit = () => {
    const bookingData = {
      name,
      phone,
      service,
      telegram_user_id: user?.id,
      telegram_username: user?.username,
    };

    // Send data back to bot
    sendData(bookingData);

    // Show confirmation
    showAlert('Дякуємо! Ми зв\'яжемося з вами найближчим часом для підтвердження запису.');
  };

  const services = [
    { id: 'haircut', name: 'Чоловіча стрижка без сюрпризів', price: '800 ₴' },
    { id: 'beard', name: 'Моделювання бороди та вусів', price: '500 ₴' },
    { id: 'massage', name: 'Масаж спини для IT-спеціалістів', price: '700 ₴' },
    { id: 'complex', name: 'Комплекс: стрижка + борода', price: '1200 ₴' },
  ];

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-3 text-accent">
            Барбершоп
          </h1>
          <p className="text-textMuted text-sm">
            Бездоганний образ за один візит
          </p>
        </div>

        {/* Greeting */}
        {user && (
          <div className="glass-effect p-4 rounded-lg mb-6 border border-white/5 animate-fade-in">
            <p className="text-textMain">
              Привіт, <span className="text-accent font-semibold">{user.first_name}</span>! 👋
            </p>
            <p className="text-textMuted text-sm mt-1">
              Оберіть послугу та залиште контакти для запису
            </p>
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          {/* Name Input */}
          <div className="animate-fade-in">
            <label className="block text-textMuted text-sm mb-2">Ваше ім'я</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введіть ваше ім'я"
              className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Phone Input */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <label className="block text-textMuted text-sm mb-2">Номер телефону</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+380 (__) ___-__-__"
              className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Service Selection */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <label className="block text-textMuted text-sm mb-2">Оберіть послугу</label>
            <div className="space-y-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    service === s.id
                      ? 'bg-accent/10 border-accent'
                      : 'bg-card border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-textMain font-medium">{s.name}</span>
                    <span className="text-accent font-bold">{s.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="glass-effect p-4 rounded-lg border border-white/5 mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-accent font-bold text-xl">12+</div>
                <div className="text-textMuted text-xs mt-1">років досвіду</div>
              </div>
              <div>
                <div className="text-accent font-bold text-xl">3</div>
                <div className="text-textMuted text-xs mt-1">етапи стерилізації</div>
              </div>
              <div>
                <div className="text-accent font-bold text-xl">10</div>
                <div className="text-textMuted text-xs mt-1">нагород</div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-center text-xs text-textMuted mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Натискаючи кнопку "Записатися", ви погоджуєтесь з політикою конфіденційності
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
