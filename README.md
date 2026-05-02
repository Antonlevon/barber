# Barbershop Landing Page

A modern, responsive landing page for a premium barbershop in Kyiv, Ukraine.

## 🎨 Design Features

- **Dark Theme**: Elegant dark background (#0F0F11) with gold accents (#D4AF37)
- **Premium Feel**: Glass-morphism effects, smooth animations with GSAP
- **Mobile Responsive**: Fully responsive design using Tailwind CSS
- **Smooth Animations**: GSAP ScrollTrigger animations for engaging user experience

## 📄 Page Sections

1. **Hero Section** - Main headline with compelling value proposition
2. **Trust/Stats Section** - 3 key trust indicators (12 years experience, 3-stage sterilization, 10 awards)
3. **Services Section** - 3 main services with pricing:
   - Men's haircut without surprises (800 ₴)
   - Beard and mustache modeling (500 ₴)
   - IT specialist back massage special (700 ₴)
4. **Team Section** - 3 master barbers with photos and descriptions
5. **Testimonials Section** - 3 authentic client reviews
6. **Booking Form Section** - Contact form with phone input

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **GSAP 3** - Animation library with ScrollTrigger
- **React Router DOM 7** - Client-side routing
- **Lucide React** - Icon library

## 📱 Routes

- `/` - Main landing page
- `/select` - Selection page (placeholder)
- `/book` - Booking page (placeholder)

## 🎯 Key Features

- **Smooth Scroll Animations**: Elements animate into view as you scroll
- **Interactive Hover Effects**: Cards and buttons respond to user interaction
- **Glass Morphism**: Modern frosted glass effect on cards
- **Gradient Backgrounds**: Subtle accent color gradients
- **Mobile-First Design**: Optimized for all screen sizes

## 📝 Content Language

All content is in Ukrainian, targeting the Kyiv market with specific pain points:
- Fear of bad haircuts
- Rushed service at other barbershops
- Lack of attention to detail
- Uncomfortable atmosphere

## 🎨 Color Palette

- Background: `#0F0F11`
- Card Background: `#1A1A1D`
- Accent (Gold): `#D4AF37`
- Text Main: `#F5F5F5`
- Text Muted: `#A1A1AA`

## 📦 Project Structure

```
barbershop-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Trust.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BookingForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── SelectionPage.jsx
│   │   └── BookingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC

---

Built with ❤️ for premium barbershop experience in Kyiv
