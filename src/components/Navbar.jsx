import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-transparent">
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <Scissors className="w-8 h-8 text-accent" />
        <span className="font-serif text-2xl font-bold tracking-wider uppercase">Barber<span className="text-accent">shop</span></span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-textMain/80">
        {isHome ? (
          <>
            <a href="#services" className="hover:text-accent transition-colors">Послуги</a>
            <a href="#team" className="hover:text-accent transition-colors">Майстри</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Відгуки</a>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-accent transition-colors">Головна</Link>
            <Link to="/select" className="hover:text-accent transition-colors">Послуги</Link>
          </>
        )}
      </div>
      <Link to="/select" className="hidden md:block bg-accent hover:bg-accent/90 text-background font-bold py-2 px-6 rounded-sm transition-all uppercase tracking-wide text-sm text-center">
        Записатися
      </Link>
    </nav>
  );
};

export default Navbar;
