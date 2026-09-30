import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, Users, Pill, ChevronRight, Star, Award, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Pill className="h-8 w-8 text-orange-500" />,
      title: "Expert Prescription Services",
      description: "Professional dispensing and medication management with personalized care for every patient."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Health & Wellness Consulting",
      description: "Comprehensive medication reviews and health consultations to optimize your treatment outcomes."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Specialized Senior Care",
      description: "Dedicated support for seniors including ODB program assistance and customized packaging solutions."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Convenient Pickup Service",
      description: "Easy medication pickup scheduling with flexible hours to accommodate your busy lifestyle."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Service" },
    { number: "5000+", label: "Patients Served" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "7", label: "Days a Week" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Community Pharmacy
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Providing exceptional pharmaceutical care and personalized health solutions to the Mississauga community with compassion and expertise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pickup-form"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Pickup</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 font-medium">Trusted by thousands of patients</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* https://images.pexels.com/photos/5207116/pexels-photo-5207116.jpeg */}
                <img
                  src={`${import.meta.env.BASE_URL}images/goreway-staff.jpg`}
                  alt="Professional pharmacy interior with modern design"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Award className="h-8 w-8 text-orange-500" />
              </div> */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200 to-transparent rounded-full blur-3xl opacity-70 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-50 translate-y-48 -translate-x-48"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Goreway Medical Pharmacy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine professional expertise with personalized care to provide exceptional pharmacy services that put your health and well-being first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Better Pharmacy Care?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied patients who trust Goreway Medical Pharmacy for their healthcare needs. Schedule your medication pickup today or visit us to learn more about our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pickup-form"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1"
              >
                Schedule Medication Pickup
              </Link>
              <Link
                to="/location"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-orange-600 hover:shadow-lg transform hover:-translate-y-1"
              >
                Visit Our Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;