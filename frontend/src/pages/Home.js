import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('Market Prices'),
      description: t('Track real-time crop prices across different regions'),
      icon: '💹',
      link: '/market-prices'
    },
    {
      title: t('Weather Forecast'),
      description: t('Get AI-powered weather predictions for your area'),
      icon: '⛅',
      link: '/weather'
    },
    {
      title: t('Expert Consultation'),
      description: t('Connect with agricultural experts for guidance'),
      icon: '👨‍🌾',
      link: '/expert-consultation'
    },
    {
      title: t('Government Schemes'),
      description: t('Learn about available financial aids and subsidies'),
      icon: '📜',
      link: '/schemes'
    },
    {
      title: t('Digital Marketplace'),
      description: t('Buy and sell agricultural products directly'),
      icon: '🏪',
      link: '/marketplace'
    },
    {
      title: t('Learning Hub'),
      description: t('Access farming tutorials and best practices'),
      icon: '📚',
      link: '/learning-hub'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-primary-50 dark:bg-gray-800 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          {t('Empowering Farmers')}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t('Your one-stop platform for agricultural guidance, market insights, and direct farmer-to-buyer connections')}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/marketplace"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              {t('Get Started')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
            <span className="absolute top-6 right-6 text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 dark:bg-primary-800 rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('Ready to grow your farming business?')}
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              {t('Join our community of farmers and agricultural experts today.')}
            </p>
            <div className="mt-8">
              <Link
                to="/forum"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                {t('Join Community')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
