import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Market Prices', href: '/market-prices' },
  { name: 'Weather', href: '/weather' },
  { name: 'Forum', href: '/forum' },
  { name: 'Expert Consultation', href: '/expert-consultation' },
  { name: 'Schemes', href: '/schemes' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Learning Hub', href: '/learning-hub' },
  { name: 'Contact', href: '/contact' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    Kisan Helper
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                               px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                {/* Language Selector */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                             px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="ml-3 p-2 rounded-md text-gray-700 dark:text-gray-300
                           hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>

                {/* Mobile menu button */}
                <div className="sm:hidden ml-3">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md
                                              text-gray-700 dark:text-gray-300 hover:text-primary-600
                                              dark:hover:text-primary-400">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                           dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
