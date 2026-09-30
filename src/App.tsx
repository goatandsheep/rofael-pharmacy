import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import ServicesPage from './pages/ServicesPage';
import PickupFormPage from './pages/PickupFormPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pickup-form" element={<PickupFormPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;