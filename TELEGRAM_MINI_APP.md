# 🚀 Telegram Mini App - Інструкція по деплою

## 📋 Що було створено

В проекті створено повноцінний Telegram Mini App в папці `/tg-mini-app/`:

```
tg-mini-app/
├── src/
│   ├── components/
│   │   └── BookingForm.jsx          # Форма запису з інтеграцією Telegram
│   ├── hooks/
│   │   └── useTelegramWebApp.js     # Хук для роботи з Telegram WebApp API
│   ├── utils/                       # Утиліти (зарезервовано)
│   ├── App.jsx                      # Головний компонент
│   ├── main.jsx                     # Точка входу
│   └── index.css                    # Стилі
├── dist/                            # Зібрана версія (після npm run build)
├── index.html                       # HTML з підключенням Telegram SDK
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
└── README.md                        # Детальна документація
```

## ✨ Ключові особливості

### Інтеграція з Telegram WebApp API

- ✅ `Telegram.WebApp.ready()` - ініціалізація додатку
- ✅ `Telegram.WebApp.expand()` - розгортання на весь екран
- ✅ `Telegram.WebApp.themeParams` - адаптація під тему Telegram
- ✅ `MainButton` - нижня кнопка "Записатися"
- ✅ `BackButton` - кнопка назад (готова до використання)
- ✅ `enableClosingConfirmation()` - підтвердження при закритті
- ✅ `sendData()` - відправка даних боту

### Оптимізація під Telegram

- Компактний дизайн без зайвих елементів
- Автозаповнення імені з Telegram профілю
- Мобільна оптимізація (viewport, touch-friendly)
- Фірмовий стиль барбершопа збережено

## 🛠️ Деплой на Vercel

### Крок 1: Підготовка

Всі файли вже створені та готові до деплою. Структура:

- Основний лендинг: `/` (https://barber-ten-kappa.vercel.app/)
- Telegram Mini App: `/tg-mini-app/` (https://barber-ten-kappa.vercel.app/tg-mini-app/)

### Крок 2: Закомітити зміни

```bash
cd E:\sertest\barbershop-landing
git add .
git commit -m "Add Telegram Mini App

- Create tg-mini-app directory with full Mini App implementation
- Add Telegram WebApp API integration
- Add booking form optimized for Telegram
- Configure Vercel for multi-app deployment

Co-Authored-By: Claude Sonnet 4 <noreply@anthropic.com>"
git push
```

### Крок 3: Vercel автоматично задеплоїть

Vercel автоматично:
1. Виявить зміни в GitHub
2. Збере основний лендинг
3. Збере Telegram Mini App
4. Опублікує обидва додатки

URL Mini App буде: **https://barber-ten-kappa.vercel.app/tg-mini-app/**

## 🤖 Підключення до Telegram бота

### Варіант 1: Menu Button (рекомендовано)

1. Відкрийте [@BotFather](https://t.me/BotFather)
2. Виберіть `/mybots` → ваш бот
3. **Bot Settings** → **Menu Button** → **Configure Menu Button**
4. Введіть URL:
   ```
   https://barber-ten-kappa.vercel.app/tg-mini-app/
   ```
5. Введіть текст кнопки: `📅 Записатися`

### Варіант 2: Inline кнопка

```javascript
bot.sendMessage(chatId, 'Записатися на стрижку:', {
  reply_markup: {
    inline_keyboard: [[
      {
        text: '📅 Записатися',
        web_app: { url: 'https://barber-ten-kappa.vercel.app/tg-mini-app/' }
      }
    ]]
  }
});
```

### Варіант 3: Keyboard кнопка

```javascript
bot.sendMessage(chatId, 'Оберіть дію:', {
  reply_markup: {
    keyboard: [[
      {
        text: '📅 Записатися',
        web_app: { url: 'https://barber-ten-kappa.vercel.app/tg-mini-app/' }
      }
    ]],
    resize_keyboard: true
  }
});
```

## 📨 Обробка даних від користувача

Коли користувач заповнює форму та натискає "Записатися", дані відправляються боту.

### Приклад обробки (Node.js + node-telegram-bot-api)

```javascript
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(YOUR_BOT_TOKEN, { polling: true });

bot.on('web_app_data', (msg) => {
  const chatId = msg.chat.id;
  const data = JSON.parse(msg.web_app_data.data);
  
  console.log('Нове бронювання:', data);
  
  // Структура data:
  // {
  //   name: "Іван Петренко",
  //   phone: "+380501234567",
  //   service: "haircut",
  //   telegram_user_id: 123456789,
  //   telegram_username: "username"
  // }
  
  // Відправте підтвердження
  const serviceNames = {
    haircut: 'Чоловіча стрижка без сюрпризів (800 ₴)',
    beard: 'Моделювання бороди та вусів (500 ₴)',
    massage: 'Масаж спини для IT-спеціалістів (700 ₴)',
    complex: 'Комплекс: стрижка + борода (1200 ₴)'
  };
  
  bot.sendMessage(chatId, 
    `✅ Дякуємо за запис, ${data.name}!\n\n` +
    `📋 Послуга: ${serviceNames[data.service]}\n` +
    `📞 Телефон: ${data.phone}\n\n` +
    `Ми зв'яжемося з вами найближчим часом для підтвердження часу!`
  );
  
  // Відправте адміністратору
  bot.sendMessage(ADMIN_CHAT_ID,
    `🔔 Новий запис!\n\n` +
    `👤 Ім'я: ${data.name}\n` +
    `📞 Телефон: ${data.phone}\n` +
    `📋 Послуга: ${serviceNames[data.service]}\n` +
    `🆔 Telegram: @${data.telegram_username || 'немає'}`
  );
});
```

## 🧪 Тестування

### Локальне тестування

```bash
cd tg-mini-app
npm run dev
```

Відкрийте: http://localhost:5174

**Важливо:** Telegram API працює тільки в Telegram WebView, тому локально деякі функції будуть недоступні.

### Тестування в Telegram

1. Створіть тестового бота через @BotFather
2. Налаштуйте Menu Button з URL: `https://barber-ten-kappa.vercel.app/tg-mini-app/`
3. Відкрийте бота та натисніть кнопку меню
4. Протестуйте форму запису

## 📱 Структура даних

### Дані, що відправляються боту

```typescript
interface BookingData {
  name: string;              // Ім'я користувача
  phone: string;             // Номер телефону
  service: string;           // ID послуги (haircut, beard, massage, complex)
  telegram_user_id: number;  // Telegram ID користувача
  telegram_username: string; // Telegram username
}
```

### Доступні послуги

```javascript
const services = [
  { id: 'haircut', name: 'Чоловіча стрижка без сюрпризів', price: '800 ₴' },
  { id: 'beard', name: 'Моделювання бороди та вусів', price: '500 ₴' },
  { id: 'massage', name: 'Масаж спини для IT-спеціалістів', price: '700 ₴' },
  { id: 'complex', name: 'Комплекс: стрижка + борода', price: '1200 ₴' }
];
```

## 🎨 Кастомізація

### Додавання нових послуг

Відредагуйте `tg-mini-app/src/components/BookingForm.jsx`:

```javascript
const services = [
  // Існуючі послуги...
  { id: 'new-service', name: 'Нова послуга', price: '1000 ₴' },
];
```

### Зміна кольорів

Відредагуйте `tg-mini-app/tailwind.config.js`:

```javascript
colors: {
  background: '#0F0F11',  // Фон
  card: '#1A1A1D',        // Картки
  accent: '#D4AF37',      // Акцент (золотий)
  textMain: '#F5F5F5',    // Основний текст
  textMuted: '#A1A1AA',   // Приглушений текст
}
```

## 🔧 Troubleshooting

### Mini App не відкривається

1. Перевірте URL в BotFather (має бути HTTPS)
2. Перевірте, що Vercel успішно задеплоїв
3. Перевірте консоль браузера на помилки

### Дані не приходять боту

1. Перевірте, що бот слухає подію `web_app_data`
2. Перевірте, що користувач натиснув MainButton
3. Перевірте формат даних в `sendData()`

### Стилі не застосовуються

1. Перевірте, що Tailwind правильно налаштований
2. Запустіть `npm run build` заново
3. Очистіть кеш браузера

## 📞 Підтримка

Детальна документація в `tg-mini-app/README.md`

---

**Готово до використання!** 🎉

Після push в GitHub, Vercel автоматично задеплоїть Mini App за адресою:
**https://barber-ten-kappa.vercel.app/tg-mini-app/**
