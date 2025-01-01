'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home'); // Default to the first section ID

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      // Find the section currently in view
      let currentSection = 'home';
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();

        // Check if the section is within the viewport
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling to a section on button click
  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/ /g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section.toLowerCase().replace(/ /g, '-'));
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-800">Muthuraj Vairamuthu.</h1>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center space-x-8">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About Me', id: 'about-me' },
            { label: 'My Expertise', id: 'my-expertise' },
            { label: 'My Projects', id: 'my-projects' },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`text-gray-800 font-medium ${
                activeSection === id
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'hover:text-purple-600'
              } transition duration-300`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Contact Me Button */}
        <button
          onClick={() => handleClick('contact-me')}
          className={`ml-8 border ${
            activeSection === 'contact-me'
              ? 'bg-purple-600 text-white'
              : 'border-purple-600 text-purple-600'
          } py-2 px-4 rounded-full font-medium hover:bg-purple-600 hover:text-white transition duration-300`}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
