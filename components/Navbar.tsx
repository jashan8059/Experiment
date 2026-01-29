import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            Aimshala
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#success" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Success Stories</a>
          <a href="#journey" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Journey</a>
          <a href="#plans" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Plans</a>
          <a href="#faq" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">FAQ</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-amber-200">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#success" className="text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Success Stories</a>
          <a href="#journey" className="text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Journey</a>
          <a href="#plans" className="text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Plans</a>
          <a href="#faq" className="text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <button className="bg-accent-500 text-white font-bold py-3 rounded-xl w-full">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;