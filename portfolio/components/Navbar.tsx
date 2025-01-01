'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  // Scroll event listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'Home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 90; // Adjust for navbar height
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollY = window.scrollY + 100; // Offset to detect middle of viewport

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          currentSection = section.id.replace(/-/g, ' '); // Convert ID to label
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling on button click
  const handleClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase().replace(/ /g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-800">Muthuraj Vairamuthu.</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {['Home', 'About Me', 'My Expertise', 'My Projects'].map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className={`text-gray-800 font-medium ${
                activeSection === section
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'hover:text-purple-600'
              } transition duration-300`}
            >
              {section}
            </button>
          ))}

          {/* Contact Me Button */}
          <button
            onClick={() => handleClick('Contact Me')}
            className={`ml-8 border ${
              activeSection === 'Contact Me'
                ? 'bg-purple-600 text-white'
                : 'border-purple-600 text-purple-600'
            } py-2 px-4 rounded-full font-medium hover:bg-purple-600 hover:text-white transition duration-300`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
