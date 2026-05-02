# Барбершоп - Telegram Mini App

Telegram Mini App для барбершопа в Києві. Дозволяє клієнтам записуватися на послуги безпосередньо через Telegram.

## 🚀 Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Запуск в режимі розробки

```bash
npm run dev
```

Додаток буде доступний за адресою: `http://localhost:5174`

### Збірка для продакшену

```bash
npm run build
```

## 📱 Інтеграція з Telegram

### 1. Створення бота

1. Відкрийте [@BotFather](https://t.me/BotFather) в Telegram
2. Створіть нового бота командою `/newbot`
3. Дайте йому ім'я та username
4. Збережіть токен бота

### 2. Налаштування Mini App

1. Відкрийте [@BotFather](https://t.me/BotFather)
2. Виберіть свого бота командою `/mybots`
3. Натисніть **Bot Settings** → **Menu Button**
4. Виберіть **Configure Menu Button**
5. Введіть URL вашого Mini App:
   ```
   https://barber-ten-kappa.vercel.app/tg-mini-app/
   ```
6. Введіть текст кнопки (наприклад: "📅 Записатися")

### 3. Отримання даних від користувача

Коли користувач заповнює форму та натискає кнопку "Записатися", дані відправляються боту через `sendData()`.

Приклад обробки даних в боті (Node.js):

```javascript
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(YOUR_BOT_TOKEN, { polling: true });

bot.on('web_app_data', (msg) => {
  const data = JSON.parse(msg.web_app_data.data);
  
  console.log('Нове бронювання:', data);
  // data містить: name, phone, service, telegram_user_id, telegram_username
  
  // Відправте підтвердження користувачу
  bot.sendMessage(msg.chat.id, 
    `✅ Дякуємо за запис!\n\n` +
    `📋 Послуга: ${data.service}\n` +
    `📞 Телефон: ${data.phone}\n\n` +
    `Ми зв'яжемося з вами найближчим часом!`
  );
});
```

## 🛠️ Технології

- **React 19** - UI фреймворк
- **Vite 8** - Інструмент збірки
- **Tailwind CSS 3** - CSS фреймворк
- **Telegram WebApp API** - Інтеграція з Telegram

## 📦 Структура проекту

```
tg-mini-app/
├── src/
│   ├── components/
│   │   └── BookingForm.jsx      # Форма бронювання
│   ├── hooks/
│   │   └── useTelegramWebApp.js # Хук для роботи з Telegram API
│   ├── App.jsx                  # Головний компонент
│   ├── main.jsx                 # Точка входу
│   └── index.css                # Стилі
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Особливості

- ✅ Автоматична адаптація під тему Telegram (світла/темна)
- ✅ Використання MainButton для підтвердження запису
- ✅ Автозаповнення імені з даних Telegram
- ✅ Підтвердження при закритті додатку
- ✅ Оптимізовано під мобільний WebView
- ✅ Відправка даних боту через `sendData()`

## 🌐 Деплой на Vercel

### Автоматичний деплой

1. Закомітьте всі зміни в git
2. Запуште в GitHub
3. Vercel автоматично задеплоїть оновлення

### Ручний деплой

```bash
# Встановіть Vercel CLI
npm i -g vercel

# Деплой
vercel --prod
```

## 🔧 Налаштування

### Зміна базового URL

Якщо ви деплоїте на інший домен, змініть `base` в `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-path/',
  // ...
})
```

### Додавання нових послуг

Відредагуйте масив `services` в `src/components/BookingForm.jsx`:

```javascript
const services = [
  { id: 'haircut', name: 'Чоловіча стрижка', price: '800 ₴' },
  // Додайте нові послуги тут
];
```

## 📞 Підтримка

Якщо у вас виникли питання або проблеми, створіть issue в репозиторії.

## 📄 Ліцензія

ISC

---

Створено з ❤️ для барбершопу в Києві
