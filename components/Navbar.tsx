
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resources', id: 'resources' },
    { name: 'Outreaches', id: 'outreaches' },
    { name: 'Donate', id: 'donate' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-[#104a32] rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
              <i className="fas fa-church text-xl text-amber-400"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-emerald-950 leading-none">
                ACFAR
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-700">Apologetics Research</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-white bg-emerald-800 shadow-md'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:bg-emerald-50 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-20 left-0 right-0 border-b border-emerald-100 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold ${
                  activeSection === link.id
                    ? 'text-white bg-emerald-800'
                    : 'text-slate-600 hover:bg-emerald-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
