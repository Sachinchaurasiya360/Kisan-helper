import React, { createContext, useContext } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
const resources = {
  en: {
    translation: {
      'Home': 'Home',
      'Market Prices': 'Market Prices',
      'Weather': 'Weather',
      'Forum': 'Forum',
      'Expert Consultation': 'Expert Consultation',
      'Schemes': 'Government Schemes',
      'Marketplace': 'Marketplace',
      'Learning Hub': 'Learning Hub',
      'Contact': 'Contact',
      // Add more translations as needed
    }
  },
  hi: {
    translation: {
      'Home': 'होम',
      'Market Prices': 'बाजार भाव',
      'Weather': 'मौसम',
      'Forum': 'चर्चा मंच',
      'Expert Consultation': 'विशेषज्ञ परामर्श',
      'Schemes': 'सरकारी योजनाएं',
      'Marketplace': 'मार्केटप्लेस',
      'Learning Hub': 'सीखने का केंद्र',
      'Contact': 'संपर्क',
      // Add more translations as needed
    }
  },
  mr: {
    translation: {
      'Home': 'मुख्यपृष्ठ',
      'Market Prices': 'बाजारभाव',
      'Weather': 'हवामान',
      'Forum': 'चर्चामंच',
      'Expert Consultation': 'तज्ञ सल्ला',
      'Schemes': 'सरकारी योजना',
      'Marketplace': 'मार्केटप्लेस',
      'Learning Hub': 'शिक्षण केंद्र',
      'Contact': 'संपर्क',
      // Add more translations as needed
    }
  },
  gu: {
    translation: {
      'Home': 'હોમ',
      'Market Prices': 'બજાર ભાવ',
      'Weather': 'હવામાન',
      'Forum': 'ચર્ચા મંચ',
      'Expert Consultation': 'નિષ્ણાત સલાહ',
      'Schemes': 'સરકારી યોજનાઓ',
      'Marketplace': 'માર્કેટપ્લેસ',
      'Learning Hub': 'શીખવાનું કેન્દ્ર',
      'Contact': 'સંપર્ક',
      // Add more translations as needed
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
