import React from 'react';
import { useTranslation } from 'react-i18next';

function Forum() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {t('Forum')}
      </h1>
    </div>
  );
}

export default Forum; 