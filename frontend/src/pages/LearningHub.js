import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  PlayCircleIcon,
  DocumentTextIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

function LearningHub() {
  const { t } = useTranslation();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      console.log('Fetching resources from API...'); // Debug log
      const response = await axios.get('/api/learning/resources');
      console.log('Resources received:', response.data); // Debug log
      setResources(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Learning API Error:', err.response?.data || err.message);
      setError(
        err.response?.data?.message || 
        err.message || 
        t('Failed to fetch learning resources')
      );
      setLoading(false);
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video':
        return <PlayCircleIcon className="h-6 w-6 text-red-500" />;
      case 'article':
        return <DocumentTextIcon className="h-6 w-6 text-blue-500" />;
      case 'course':
        return <AcademicCapIcon className="h-6 w-6 text-green-500" />;
      default:
        return <BookOpenIcon className="h-6 w-6 text-purple-500" />;
    }
  };

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
        {t('Learning Hub')}
      </h1>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search resources...')}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="all">{t('All Types')}</option>
          <option value="video">{t('Videos')}</option>
          <option value="article">{t('Articles')}</option>
          <option value="course">{t('Courses')}</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="all">{t('All Topics')}</option>
          <option value="organic">{t('Organic Farming')}</option>
          <option value="tech">{t('Modern Technology')}</option>
          <option value="management">{t('Farm Management')}</option>
          <option value="soil">{t('Soil Health')}</option>
          <option value="pest">{t('Pest Control')}</option>
        </select>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {resource.thumbnail && (
              <img
                src={resource.thumbnail}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {getResourceIcon(resource.type)}
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t(resource.type)}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {resource.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{resource.duration}</span>
                </div>
                {resource.enrollments && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <UserGroupIcon className="h-5 w-5 mr-2" />
                    <span>{resource.enrollments} {t('learners')}</span>
                  </div>
                )}
              </div>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('Start Learning')}
                <ChevronRightIcon className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400 py-8">
          {t('No resources found matching your criteria')}
        </div>
      )}
    </div>
  );
}

export default LearningHub; 