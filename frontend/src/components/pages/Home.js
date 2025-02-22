import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {t('Welcome to Kisan Helper')}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {t('Empowering farmers through technology')}
      </p>
    </div>
  );
}

export default Home; 