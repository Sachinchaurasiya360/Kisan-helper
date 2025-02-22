import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  DocumentTextIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

function Schemes() {
  const { t } = useTranslation();
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      const response = await axios.get('/api/schemes/list');
      setSchemes(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Schemes API Error:', err);
      setError(t('Failed to fetch schemes'));
      setLoading(false);
    }
  };

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t('Government Schemes')}
      </h1>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search schemes...')}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="all">{t('All Categories')}</option>
          <option value="financial">{t('Financial Support')}</option>
          <option value="insurance">{t('Insurance')}</option>
          <option value="subsidy">{t('Subsidies')}</option>
          <option value="training">{t('Training & Development')}</option>
          <option value="infrastructure">{t('Infrastructure')}</option>
        </select>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {scheme.name}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {t(scheme.category)}
                    </span>
                  </div>
                </div>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                </a>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {scheme.description}
              </p>

              <div className="space-y-3">
                {scheme.benefits && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t('Key Benefits')}:
                    </h4>
                    <ul className="space-y-1">
                      {scheme.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{t('Last Date')}: {scheme.lastDate}</span>
                </div>

                {scheme.fundingAmount && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CurrencyRupeeIcon className="h-5 w-5 mr-2" />
                    <span>{t('Maximum Funding')}: ₹{scheme.fundingAmount}</span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  {t('Apply Now')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400 py-8">
          {t('No schemes found matching your criteria')}
        </div>
      )}
    </div>
  );
}

export default Schemes; 