import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, User } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos', path: '/catalog' },
    { title: 'Panel', path: '/dashboard' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">Capaci<span className="text-blue-600">Plus</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <User size={20} />
              <span>{user?.name || 'Cuenta'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="flex items-center py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} className="mr-2" />
              <span>{user?.name || 'Cuenta'}</span>
            </Link>
          </div>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 py-3 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                autoFocus
              />
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={toggleSearch}
                aria-label="Cerrar búsqueda"
              >
                <X size={18} className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;