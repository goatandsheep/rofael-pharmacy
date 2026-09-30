import React from 'react';
import { MapPin, Clock, Phone, Calendar, ExternalLink } from 'lucide-react';

const LocationPage: React.FC = () => {
  const isMaltonDomain = window.location.hostname.replace(/^www\./, '') === 'maltonpharmacy.ca';
  const pharmacyAddress = isMaltonDomain ? '6870 Goreway Dr' : '7330 Goreway Dr';
  const pharmacyPostal = isMaltonDomain ? 'L4V 1P1' : 'L4T 4J2';
  const pharmacyPhone = isMaltonDomain ? '+1 (905) 678-6870' : '+1 (905) 671-3784';
  const pharmacyPhoneCompact = isMaltonDomain ? '+19056786870' : '+19056713784';
  const pharmacyMapLink = isMaltonDomain ? 'https://maps.app.goo.gl/LLk9hmoM38muKtzYA' : 'https://maps.app.goo.gl/Ru8ESUU62a1vQzrj6';
  const pharmacyMapEmbed = isMaltonDomain ? 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12720.24113035276!2d-79.6445294!3d43.7218761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3be820d9b319%3A0x16fc8ab53160aa97!2sMalton%20Medical%20Pharmacy!5e1!3m2!1sen!2sca!4v1790790480386!5m2!1sen!2sca' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.550600586127!2d-79.6434306877561!3d43.71988757097855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bf2b9d3232b%3A0x5ddc3f77687e2178!2sGoreway%20Medical%20Pharmacy!5e0!3m2!1sen!2s!4v1753828453040!5m2!1sen!2s';
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

  const holidayHours = [
    { holiday: 'New Year', date: 'Wednesday, January 1, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Good Friday', date: 'Friday, April 18, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Easter Monday', date: 'Monday, April 21, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Victoria Day', date: 'Monday, May 19, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Canada Day', date: 'Tuesday, July 1, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Civic Holiday', date: 'Monday, August 4, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Labour Day', date: 'Monday, September 1, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'National Day for Truth and Reconciliation', date: 'Tuesday, September 30, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Thanksgiving Day', date: 'Monday, October 13, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Remembrance Day', date: 'Tuesday, November 11, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Christmas Day', date: 'Thursday, December 25, 2025', hours: '10:00 AM - 3:00 PM' },
    { holiday: 'Boxing Day', date: 'Friday, December 26, 2025', hours: '10:00 AM - 3:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Location & Hours</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Conveniently located in Mississauga with extended hours to serve you better.
              Find us easily with our detailed location information and current operating hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact & Location Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Address</h2>
                  <div className="text-gray-600 space-y-1">
                    <p className="text-lg font-medium"><a href={pharmacyMapLink}>{pharmacyAddress}</a></p>
                    <p>Mississauga, ON {pharmacyPostal}</p>
                    <p>Canada</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={pharmacyMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${pharmacyPhoneCompact}`}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                  <a href={`tel:${pharmacyPhoneCompact}`} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    {pharmacyPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Hours Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Regular Hours</h3>
              </div>

              <div className="space-y-3">
                {regularHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-orange-500 to-orange-600">
                <h3 className="text-2xl font-bold text-white mb-2">Find Us on the Map</h3>
                <p className="text-orange-100">
                  Easily accessible location with convenient parking available
                </p>
              </div>
              <div className="relative">
                <iframe
                  src={pharmacyMapEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Holiday Hours Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-red-100 rounded-lg">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Holiday Hours {currentYear}</h2>
                <p className="text-gray-600">Special operating hours during statutory holidays</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {holidayHours.map((holiday, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-bold text-gray-900 mb-2">{holiday.holiday}</h4>
                  <p className="text-gray-600 mb-2">{holiday.date}</p>
                  <p className="text-orange-600 font-semibold">{holiday.hours}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800">
                <strong>Please note:</strong> Holiday hours are subject to change. We recommend calling ahead to confirm our hours during holiday periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;