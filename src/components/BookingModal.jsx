import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Scissors } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    master: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const services = [
    { id: 'haircut', name: 'Чоловіча стрижка без «сюрпризів»', price: '800 ₴', duration: '60 хв' },
    { id: 'beard', name: 'Моделювання бороди та вусів', price: '500 ₴', duration: '45 хв' },
    { id: 'massage', name: 'Спецпропозиція «Спина ІТ-шника»', price: '700 ₴', duration: '45 хв' },
    { id: 'combo', name: 'Комплекс: стрижка + борода', price: '1200 ₴', duration: '90 хв' }
  ];

  const masters = [
    {
      id: 'nikita',
      name: 'Нікіта Шипілов',
      role: 'Шеф-барбер',
      specialty: 'Складні образи',
      img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'bohdan',
      name: 'Богдан',
      role: 'Топ-барбер',
      specialty: 'Філігранний фейд',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'denis',
      name: 'Денис Ніколаєнко',
      role: 'Майстер класики',
      specialty: 'Класичні стрижки',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    alert(`Запис підтверджено!\n\nПослуга: ${services.find(s => s.id === formData.service)?.name}\nМайстер: ${masters.find(m => m.id === formData.master)?.name}\nДата: ${formData.date}\nЧас: ${formData.time}\n\nМи зв'яжемося з вами для підтвердження.`);
    onClose();
    setStep(1);
    setFormData({
      service: '',
      master: '',
      date: '',
      time: '',
      name: '',
      phone: ''
    });
  };

  const canProceed = () => {
    switch(step) {
      case 1: return formData.service !== '';
      case 2: return formData.master !== '';
      case 3: return formData.date !== '' && formData.time !== '';
      case 4: return formData.name !== '' && formData.phone !== '';
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-effect rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Онлайн запис</h2>
              <p className="text-sm text-textMuted mt-1">Крок {step} з 4</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Scissors className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Оберіть послугу</h3>
                    <p className="text-sm text-textMuted">Що вас цікавить?</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center justify-between p-4 glass-effect rounded-lg cursor-pointer transition-all hover:border-accent/50 ${
                        formData.service === service.id ? 'border-accent bg-accent/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-5 h-5 text-accent"
                        />
                        <div>
                          <p className="font-semibold">{service.name}</p>
                          <p className="text-sm text-textMuted">{service.duration}</p>
                        </div>
                      </div>
                      <span className="text-accent font-bold">{service.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Master Selection */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Оберіть майстра</h3>
                    <p className="text-sm text-textMuted">Хто вас обслуговуватиме?</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {masters.map((master) => (
                    <label
                      key={master.id}
                      className={`flex items-center gap-4 p-4 glass-effect rounded-lg cursor-pointer transition-all hover:border-accent/50 ${
                        formData.master === master.id ? 'border-accent bg-accent/5' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="master"
                        value={master.id}
                        checked={formData.master === master.id}
                        onChange={(e) => setFormData({ ...formData, master: e.target.value })}
                        className="w-5 h-5 text-accent"
                      />
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                        <img
                          src={master.img}
                          alt={master.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{master.name}</p>
                        <p className="text-sm text-accent">{master.role}</p>
                        <p className="text-xs text-textMuted">{master.specialty}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time Selection */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Оберіть дату та час</h3>
                    <p className="text-sm text-textMuted">Коли вам зручно?</p>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Дата</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Час</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          formData.time === time
                            ? 'bg-accent text-background'
                            : 'glass-effect hover:border-accent/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ваші контакти</h3>
                    <p className="text-sm text-textMuted">Як з вами зв'язатися?</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ім'я</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше ім'я"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+380 XX XXX XX XX"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 glass-effect rounded-lg">
                  <h4 className="font-semibold mb-3">Підсумок запису:</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-textMuted">Послуга:</span> <span className="font-medium">{services.find(s => s.id === formData.service)?.name}</span></p>
                    <p><span className="text-textMuted">Майстер:</span> <span className="font-medium">{masters.find(m => m.id === formData.master)?.name}</span></p>
                    <p><span className="text-textMuted">Дата:</span> <span className="font-medium">{formData.date}</span></p>
                    <p><span className="text-textMuted">Час:</span> <span className="font-medium">{formData.time}</span></p>
                    <p className="pt-2 border-t border-white/10"><span className="text-textMuted">Вартість:</span> <span className="font-bold text-accent">{services.find(s => s.id === formData.service)?.price}</span></p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all font-medium"
                >
                  Назад
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    canProceed()
                      ? 'bg-accent text-background hover:bg-accent/90'
                      : 'bg-white/5 text-textMuted cursor-not-allowed'
                  }`}
                >
                  Далі
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    canProceed()
                      ? 'bg-accent text-background hover:bg-accent/90'
                      : 'bg-white/5 text-textMuted cursor-not-allowed'
                  }`}
                >
                  Підтвердити запис
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
