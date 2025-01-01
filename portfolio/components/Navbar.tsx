'use client';

import { useState } from 'react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 fixed top-0 w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 mr-3" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-50">Muthuraj Portfolio</h1>
        </div>
        <div className="flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className="cursor-pointer text-gray-800 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {section}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
