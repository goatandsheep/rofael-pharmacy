import React from 'react';
import { Pill, Heart, Users, Shield, Clock, Award, FileText, Home, Stethoscope, Download } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Pill className="h-8 w-8 text-orange-500" />,
      title: "Prescription Dispensing",
      description: "Professional dispensing of all prescription medications with thorough consultation and drug interaction screening to ensure your safety and optimal treatment outcomes."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Medication Reviews",
      description: "Comprehensive medication reviews with our pharmacists to optimize your treatment plan, identify potential interactions, and ensure you're getting the most from your medications."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Patient Counseling",
      description: "One-on-one consultations to help you understand your medications, proper usage techniques, potential side effects, and answer any questions you may have."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Health Monitoring",
      description: "Regular health monitoring services including blood pressure checks, diabetes management support, and tracking of vital health indicators."
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Customized Packaging",
      description: "Specialized packaging solutions including blister packs and multi-dose packaging to help you manage complex medication regimens safely and effectively."
    },
    {
      icon: <Home className="h-8 w-8 text-orange-600" />,
      title: "Home Visits",
      description: "Convenient home visit services for patients who have difficulty visiting the pharmacy, ensuring continuous access to pharmaceutical care and consultation."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-500" />,
      title: "Diabetes Support",
      description: "Specialized diabetes care including blood glucose monitoring, insulin management, dietary guidance, and ongoing support for optimal diabetes management."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Clinical Services",
      description: "Advanced clinical services including medication therapy management, chronic disease management, and collaboration with healthcare providers for comprehensive care."
    }
  ];

  const specialtyServices = [
    {
      title: "Psychogeriatric Support",
      description: "Specialized pharmaceutical care for seniors with mental health conditions, including medication management and family support services."
    },
    {
      title: "Financial Support Programs",
      description: "Assistance with drug coverage programs, insurance claims, and connecting patients with financial aid programs to ensure affordable access to medications."
    },
    {
      title: "Effective Medication Administration",
      description: "Training and support for proper medication administration techniques, including injection training and inhaler technique optimization."
    },
    {
      title: "COVID-19 Services",
      description: "Ongoing support for COVID-19 related healthcare needs, including consultation on treatments and health management during recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Pharmacy Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive pharmaceutical care tailored to your unique health needs. We combine professional expertise 
              with personalized attention to deliver exceptional healthcare services to our community.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Core Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Pharmacy Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential pharmaceutical services designed to support your health and well-being at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialty Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialty Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced pharmaceutical care services for specialized health conditions and unique patient needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Goreway Medical Pharmacy?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to excellence and patient-centered care sets us apart in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Extended Hours</h3>
              <p className="opacity-90">Open 7 days a week with convenient hours to fit your schedule.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="opacity-90">Licensed pharmacists with years of experience in community healthcare.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
              <p className="opacity-90">Individual attention and customized solutions for each patient's needs.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Seniors Resources Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 border-t-4 border-green-500">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              IMPORTANT RESOURCES FOR SENIORS
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Once you turn 65, you automatically qualify to have your eligible prescription drug costs covered 
                through the Ontario Drug Benefit (ODB) program. Your ODB coverage starts on the first day of the 
                month after your 65th birthday, if you live in Ontario and have a valid Health Card.
              </p>
              
              <div className="flex justify-center my-8">
                <a
                  href="https://thpharmacy.com/wp-content/uploads/2015/05/Co-Payment-Application-For-Seniors-Form-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-4"
                >
                  <Download className="h-12 w-12" />
                  <div className="text-left">
                    <div className="text-xl font-bold">Download PDF Form</div>
                    <div className="text-red-100">Co-Payment Application</div>
                  </div>
                </a>
              </div>
              
              <p className="font-semibold text-gray-900">
                Print and fill out the Co-Payment Application for Seniors.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                <strong>Need Help?</strong> Our pharmacy team is here to assist you with ODB applications and answer any questions about senior drug benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;