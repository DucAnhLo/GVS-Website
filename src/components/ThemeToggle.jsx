'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Icon icon="fluent:weather-sunny-24-filled" className="w-6 h-6 transition-transform group-hover:rotate-45" />
      ) : (
        <Icon icon="fluent:weather-moon-24-filled" className="w-6 h-6 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
