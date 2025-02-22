import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CloudIcon, 
  CurrencyRupeeIcon,
  UserGroupIcon,
  BookOpenIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  ChartBarIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

function Home() {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      name: 'Weather Updates',
      description: 'Get real-time weather forecasts and farming recommendations',
      icon: CloudIcon,
      href: '/weather',
      color: 'bg-blue-500'
    },
    {
      name: 'Market Prices',
      description: 'Stay updated with latest agricultural commodity prices',
      icon: CurrencyRupeeIcon,
      href: '/market-prices',
      color: 'bg-green-500'
    },
    {
      name: 'Expert Consultation',
      description: 'Connect with agricultural experts for guidance',
      icon: UserGroupIcon,
      href: '/expert-consultation',
      color: 'bg-purple-500'
    },
    {
      name: 'Learning Resources',
      description: 'Access educational content and farming techniques',
      icon: BookOpenIcon,
      href: '/learning-hub',
      color: 'bg-yellow-500'
    }
  ];

  const services = [
    {
      name: 'Marketplace',
      description: 'Buy and sell agricultural products and equipment',
      icon: ShoppingCartIcon,
      href: '/marketplace'
    },
    {
      name: 'Government Schemes',
      description: 'Information about agricultural schemes and benefits',
      icon: DocumentTextIcon,
      href: '/schemes'
    },
    {
      name: 'Market Analysis',
      description: 'Detailed market trends and price analysis',
      icon: ChartBarIcon,
      href: '/market-prices'
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock assistance for farmers',
      icon: PhoneIcon,
      href: '/contact'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Farmers' },
    { value: '50+', label: 'Expert Consultants' },
    { value: '100+', label: 'Daily Market Updates' },
    { value: '24/7', label: 'Support Available' },
  ];

  const benefits = [
    'Real-time weather alerts and forecasts',
    'Direct connection with agricultural experts',
    'Latest market prices and trends',
    'Access to government schemes and subsidies',
    'Educational resources and training materials',
    'Community forum for knowledge sharing',
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary-600/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Animated Circles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">{t('Empowering Farmers')}</span>
              <span className="block text-yellow-300">
                {t('Through Technology')}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              {t('Access modern farming solutions, market insights, and expert guidance all in one place')}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link 
                  to="/marketplace" 
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                >
                  {t('Get Started')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  {t('Contact Us')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section with Counter Animation */}
      <div className="relative bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl font-bold text-primary-600 dark:text-primary-400"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {t(stat.label)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with Hover Effects */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('Key Features')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('Everything you need to manage your farming activities efficiently')}
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link
                to={feature.href}
                className="block relative rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`${feature.color} rounded-lg p-3 inline-block`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {t(feature.name)}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {t(feature.description)}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section with Checkmark Animation */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('Why Choose Kisan Helper?')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {t('Comprehensive farming solutions at your fingertips')}
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircleIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{t(benefit)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with Glass Effect */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('Our Services')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {t('Comprehensive solutions for modern farming')}
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={service.href}
                  className="group block relative rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {t(service.name)}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {t(service.description)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section with Card Hover */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('What Farmers Say')}
            </h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Farmer Name</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  "Kisan Helper has transformed how I manage my farm. The weather alerts and market prices help me make better decisions."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download App Section with Floating Animation */}
      <div className="relative overflow-hidden bg-primary-600 dark:bg-primary-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="md:flex md:items-center md:justify-between">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white">
                {t('Get the Kisan Helper App')}
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                {t('Access all features on the go with our mobile app')}
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                  <span>App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                  <span>Play Store</span>
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="mt-8 md:mt-0 md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Phone mockup with floating animation */}
              <motion.div 
                className="relative h-[600px] w-[300px] mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-black rounded-[3rem] transform rotate-6" />
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-[2.8rem]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section with Gradient */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('Ready to get started?')}</span>
            <span className="block text-primary-200">
              {t('Join our farming community today.')}
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <motion.div 
              className="inline-flex rounded-md shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-300"
              >
                {t('Get Started')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
