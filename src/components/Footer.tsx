import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const isMaltonDomain = window.location.hostname.replace(/^www\./, '') === 'maltonpharmacy.ca';
  const pharmacyAddress = isMaltonDomain ? '6870 Goreway Dr' : '7330 Goreway Dr';
  const pharmacyPostal = isMaltonDomain ? 'L4V 1P1' : 'L4T 4J2';
  const pharmacyPhone = isMaltonDomain ? '+1 (905) 678-6870' : '+1 (905) 671-3784';
  const pharmacyPhoneCompact = isMaltonDomain ? '+19056786870' : '+19056713784';
  const pharmacyMapLink = isMaltonDomain ? 'https://maps.app.goo.gl/LLk9hmoM38muKtzYA' : 'https://maps.app.goo.gl/Ru8ESUU62a1vQzrj6';
  const currentYear = new Date().getFullYear();

  const regularHoursMalton = [
    { day: 'Sunday & Holidays', hours: 'Closed' },
    { day: 'Monday - Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  ];
  const regularHoursGoreway = [
    { day: 'Sunday & Holidays', hours: '10:00 AM - 2:00 PM' },
    { day: 'Monday - Friday', hours: '9:30 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
  ];
  const regularHours = isMaltonDomain ? regularHoursMalton : regularHoursGoreway;


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
                    {pharmacyAddress}<br />
                    Mississauga, ON {pharmacyPostal}<br />
                    Canada
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${pharmacyPhoneCompact}`} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    {pharmacyPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Hours of Operation</h3>
            <div className="space-y-2 text-sm">

              {regularHours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-300">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
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
              <a href={pharmacyMapLink} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <p>&copy; {currentYear} Rofael Group. All rights reserved.</p>
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