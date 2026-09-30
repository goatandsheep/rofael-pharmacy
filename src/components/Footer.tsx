import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    7330 Goreway Dr<br />
                    Mississauga, ON L4T 4J2<br />
                    Canada
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+19056713784" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    +1 (905) 671-3784
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Hours of Operation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span>9:30 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <div className="space-y-3">
              <a href="/location" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Location & Hours
              </a>
              <a href="/services" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Our Services
              </a>
              <a href="/pickup-form" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Medication Pickup Form
              </a>
              <a href="https://maps.app.goo.gl/Ru8ESUU62a1vQzrj6" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <p>&copy; {currentYear} Goreway Medical Pharmacy. All rights reserved.</p>
            <p className="flex items-center space-x-1">
              <span>Website designed with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by</span>
              <a 
                href="https://clockout.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
              >
                ClockOut Automations
              </a>
            </p>
          </div>
          <p className="text-xs text-gray-500">
            chat bot icon by{' '}
            <a 
              target="_blank" 
              href="https://icons8.com"
              className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
            >
              Icons8
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;