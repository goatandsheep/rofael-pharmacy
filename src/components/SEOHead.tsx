import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead: React.FC = () => {
  const location = useLocation();
  
  const getPageMeta = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Goreway Medical Pharmacy | Your Trusted Community Pharmacy in Mississauga',
          description: 'Goreway Medical Pharmacy in Mississauga offers comprehensive pharmaceutical services, medication pickup, and personalized healthcare solutions. Visit us at 7330 Goreway Dr.',
        };
      case '/location':
        return {
          title: 'Location & Hours | Goreway Medical Pharmacy Mississauga',
          description: 'Visit Goreway Medical Pharmacy at 7330 Goreway Dr, Mississauga. Find our hours, directions, and holiday schedules for convenient medication pickup.',
        };
      case '/services':
        return {
          title: 'Pharmacy Services | Goreway Medical Pharmacy',
          description: 'Comprehensive pharmacy services including prescription dispensing, medication reviews, diabetes support, and specialized senior care at Goreway Medical Pharmacy.',
        };
      case '/pickup-form':
        return {
          title: 'Medication Pickup Form | Goreway Medical Pharmacy',
          description: 'Schedule your medication pickup at Goreway Medical Pharmacy. Complete our simple form to arrange convenient prescription collection.',
        };
      default:
        return {
          title: 'Goreway Medical Pharmacy | Your Trusted Community Pharmacy',
          description: 'Professional pharmacy services in Mississauga, Ontario.',
        };
    }
  };

  const { title, description } = getPageMeta();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://maltonpharmacy.ca/#business",
    "name": "Goreway Medical Pharmacy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7330 Goreway Dr",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L4T 4J2",
      "addressCountry": "CA"
    },
    "telephone": "+19056713784",
    "url": "https://maltonpharmacy.ca",
    "openingHours": [
      "Su 10:00-14:00",
      "Mo 09:30-19:00",
      "Tu 09:30-19:00",
      "We 09:30-19:00",
      "Th 09:30-19:00",
      "Fr 09:30-19:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "image": "https://maltonpharmacy.ca/images/goreway.png",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.71988757097855,
      "longitude": -79.6434306877561
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-CA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://maltonpharmacy.ca${location.pathname}`} />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`https://maltonpharmacy.ca${location.pathname}`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;