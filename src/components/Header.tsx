import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Location & Hours', href: '/location' },
    { name: 'Services', href: '/services' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b-2 border-orange-100 sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="font-medium">+1 (905) 671-3784</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>7330 Goreway Dr, Mississauga, ON</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/goreway.png`}
              alt="Goreway Medical Pharmacy"
              className="h-12 w-auto transition-transform duration-200 hover:scale-105"
              width="266"
              height="89"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative ${
                  isActive(item.href) 
                    ? 'text-orange-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pickup-form"
              className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transform hover:-translate-y-0.5 ${
                isActive('/pickup-form') ? 'shadow-lg' : ''
              }`}
            >
              Medication Pickup
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 py-2 ${
                    isActive(item.href) ? 'text-orange-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/pickup-form"
                onClick={() => setIsMenuOpen(false)}
                className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-orange-600 hover:to-orange-700 text-center ${
                  isActive('/pickup-form') ? 'shadow-lg' : ''
                }`}
              >
                Medication Pickup
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;