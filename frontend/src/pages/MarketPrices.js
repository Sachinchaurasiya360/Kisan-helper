import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  CurrencyRupeeIcon, 
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

function MarketPrices() {
  const { t } = useTranslation();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    try {
      const response = await axios.get('/api/market/prices');
      setPrices(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Market API Error:', err);
      setError(t('Failed to fetch market prices'));
      setLoading(false);
    }
  };

  const filteredPrices = prices.filter(price => {
    const matchesSearch = price.crop.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || price.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriceChangeColor = (change) => {
    if (change > 0) return 'text-green-600 dark:text-green-400';
    if (change < 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ArrowPathIcon className="h-12 w-12 animate-spin text-primary-600" />
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
        {t('Market Prices')}
      </h1>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search crops...')}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-4 md:mt-0 md:ml-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="all">{t('All Categories')}</option>
          <option value="cereals">{t('Cereals')}</option>
          <option value="pulses">{t('Pulses')}</option>
          <option value="vegetables">{t('Vegetables')}</option>
          <option value="fruits">{t('Fruits')}</option>
          <option value="oilseeds">{t('Oilseeds')}</option>
        </select>
      </div>

      {/* Price Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrices.map((price, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {price.crop}
              </h3>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {t(price.category)}
              </span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CurrencyRupeeIcon className="h-5 w-5 text-gray-500 mr-1" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {price.price}
                </span>
                <span className="text-sm text-gray-500 ml-1">/{price.unit}</span>
              </div>

              <div className={`flex items-center ${getPriceChangeColor(price.priceChange)}`}>
                {price.priceChange > 0 ? (
                  <ArrowTrendingUpIcon className="h-5 w-5 mr-1" />
                ) : price.priceChange < 0 ? (
                  <ArrowTrendingDownIcon className="h-5 w-5 mr-1" />
                ) : null}
                <span className="font-semibold">
                  {price.priceChange > 0 ? '+' : ''}{price.priceChange}%
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>{t('Market')}: {price.market}</p>
              <p>{t('Last Updated')}: {new Date(price.lastUpdated).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredPrices.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400 py-8">
          {t('No matching crops found')}
        </div>
      )}
    </div>
  );
}

export default MarketPrices; 