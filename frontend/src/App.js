import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
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
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
                  <Route path="/learning-hub" element={<LearningHub />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
