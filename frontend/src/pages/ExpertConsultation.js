import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  UserCircleIcon,
  ChatBubbleLeftIcon,
  CalendarIcon,
  StarIcon,
  PhoneIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

function ExpertConsultation() {
  const { t } = useTranslation();
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchExperts();
  }, []);

  const fetchExperts = async () => {
    try {
      const response = await axios.get('/api/expert/list');
      setExperts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Expert API Error:', err);
      setError(t('Failed to fetch experts'));
      setLoading(false);
    }
  };

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expert.category === selectedCategory;
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
        {t('Expert Consultation')}
      </h1>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('Search by name or specialization...')}
          className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="all">{t('All Specializations')}</option>
          <option value="soil">{t('Soil Health')}</option>
          <option value="crops">{t('Crop Management')}</option>
          <option value="pests">{t('Pest Control')}</option>
          <option value="irrigation">{t('Irrigation')}</option>
          <option value="organic">{t('Organic Farming')}</option>
        </select>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <UserCircleIcon className="h-12 w-12 text-gray-400" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {expert.specialization}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{expert.rating} ({expert.reviewCount} {t('reviews')})</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{t('Available')}: {expert.availability}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
                  <span>{t('Languages')}: {expert.languages.join(', ')}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {expert.description}
              </p>

              <div className="flex space-x-4">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <VideoCameraIcon className="h-5 w-5 mr-2" />
                  {t('Video Call')}
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  {t('Voice Call')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExperts.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400 py-8">
          {t('No experts found matching your criteria')}
        </div>
      )}
    </div>
  );
}

export default ExpertConsultation; 