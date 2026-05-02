import React, { useState, useEffect } from 'react';
import { useTelegramWebApp } from '../hooks/useTelegramWebApp';

const BookingForm = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [master, setMaster] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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
    if (phone && name && service && master && date && time) {
      showMainButton('Записатися', handleSubmit);
    } else {
      hideMainButton();
    }

    return () => hideMainButton();
  }, [phone, name, service, master, date, time]);

  const handleSubmit = () => {
    const bookingData = {
      name,
      phone,
      service,
      master,
      date,
      time,
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

  const masters = [
    { id: 'nikita', name: 'Нікіта Шипілов', role: 'Шеф-барбер' },
    { id: 'bohdan', name: 'Богдан', role: 'Топ-барбер' },
    { id: 'denys', name: 'Денис Ніколаєнко', role: 'Майстер класики' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('uk-UA', { weekday: 'short', day: 'numeric', month: 'short' })
      });
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200"
          alt="Barbershop background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 p-4 pb-24">
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
                Оберіть послугу, майстра та зручний час для запису
              </p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-5">
            {/* Name Input */}
            <div className="animate-fade-in">
              <label className="block text-textMuted text-sm mb-2">Ваше ім'я</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введіть ваше ім'я"
                className="w-full bg-card/80 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors"
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
                className="w-full bg-card/80 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors"
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
                    className={`w-full text-left p-4 rounded-lg border transition-all backdrop-blur-sm ${
                      service === s.id
                        ? 'bg-accent/10 border-accent'
                        : 'bg-card/80 border-white/10 hover:border-white/20'
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

            {/* Master Selection */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <label className="block text-textMuted text-sm mb-2">Оберіть майстра</label>
              <div className="space-y-2">
                {masters.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMaster(m.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all backdrop-blur-sm ${
                      master === m.id
                        ? 'bg-accent/10 border-accent'
                        : 'bg-card/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-textMain font-medium">{m.name}</div>
                    <div className="text-textMuted text-sm mt-1">{m.role}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <label className="block text-textMuted text-sm mb-2">Оберіть дату</label>
              <div className="grid grid-cols-3 gap-2">
                {availableDates.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDate(d.value)}
                    className={`p-3 rounded-lg border transition-all backdrop-blur-sm text-sm ${
                      date === d.value
                        ? 'bg-accent/10 border-accent text-accent'
                        : 'bg-card/80 border-white/10 hover:border-white/20 text-textMain'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <label className="block text-textMuted text-sm mb-2">Оберіть час</label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`p-3 rounded-lg border transition-all backdrop-blur-sm ${
                      time === t
                        ? 'bg-accent/10 border-accent text-accent'
                        : 'bg-card/80 border-white/10 hover:border-white/20 text-textMain'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="glass-effect p-4 rounded-lg border border-white/5 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
            <p className="text-center text-xs text-textMuted mt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Натискаючи кнопку "Записатися", ви погоджуєтесь з політикою конфіденційності
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
