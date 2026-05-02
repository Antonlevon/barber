import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <Scissors className="w-6 h-6 text-accent" />
            <span className="font-serif text-xl font-bold tracking-wider uppercase">Barber<span className="text-accent">shop</span></span>
          </div>
          
          <div className="text-textMuted text-sm text-center md:text-left">
            <p>Київ, Україна. Всі права захищено &copy; {new Date().getFullYear()}</p>
          </div>
          
          <div className="flex gap-6 text-textMuted">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Telegram</a>
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
