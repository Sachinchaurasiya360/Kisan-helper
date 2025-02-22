import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MarketPrices from './pages/MarketPrices';
import Weather from './pages/Weather';
import Forum from './pages/Forum';
import ExpertConsultation from './pages/ExpertConsultation';
import Schemes from './pages/Schemes';
import Marketplace from './pages/Marketplace';
import LearningHub from './pages/LearningHub';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/expert-consultation" element={<ExpertConsultation />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route 
              path="/learning-hub" 
              element={
                <ErrorBoundary>
                  <LearningHub />
                </ErrorBoundary>
              } 
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
