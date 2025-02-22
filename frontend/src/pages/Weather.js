import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  CloudIcon, 
  SunIcon,
  BoltIcon,
  ArrowPathIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

function Weather() {
  const { t } = useTranslation();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(`/api/weather/current`, {
          params: {
            lat: location.lat,
            lon: location.lon
          }
        }),
        axios.get(`/api/weather/forecast`, {
          params: {
            lat: location.lat,
            lon: location.lon
          }
        })
      ]);

      setWeather(currentRes.data);
      setForecast(forecastRes.data);
      setLoading(false);
    } catch (err) {
      console.error('Weather API Error:', err.response?.data || err.message);
      const errorMessage = err.response?.data?.message || err.message || t('Failed to fetch weather data');
      setError(errorMessage);
      setLoading(false);
    }
  }, [location, t]);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        err => {
          setError(t('Location access denied. Please enable location services.'));
          setLoading(false);
        }
      );
    }
  }, [t]);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location, fetchWeatherData]);

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
      {/* Current Weather */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('Weather')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {weather?.condition === 'Clear' ? (
                <SunIcon className="h-24 w-24 text-yellow-500" />
              ) : weather?.condition === 'Clouds' ? (
                <CloudIcon className="h-24 w-24 text-gray-500" />
              ) : (
                <BoltIcon className="h-24 w-24 text-blue-500" />
              )}
            </div>
            <h2 className="text-4xl font-bold mb-2">{weather?.temperature}°C</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{weather?.condition}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <ArrowPathIcon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('Wind Speed')}</p>
              <p className="text-lg font-semibold">{weather?.windSpeed} km/h</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <BeakerIcon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('Humidity')}</p>
              <p className="text-lg font-semibold">{weather?.humidity}%</p>
            </div>
          </div>
        </div>

        {/* Farming Recommendations */}
        {weather?.recommendations && (
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{t('Farming Recommendations')}</h3>
            <p className="text-gray-700 dark:text-gray-300">{weather.recommendations}</p>
          </div>
        )}
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">{t('5-Day Forecast')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="font-semibold mb-2">{day.date}</p>
              {day.condition === 'Clear' ? (
                <SunIcon className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              ) : day.condition === 'Clouds' ? (
                <CloudIcon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
              ) : (
                <BoltIcon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              )}
              <p className="text-lg font-bold mb-1">{day.temperature}°C</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{day.condition}</p>
              <div className="mt-2 text-sm">
                <p>{t('Rain')}: {day.rainChance}%</p>
                <p>{t('Humidity')}: {day.humidity}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather; 