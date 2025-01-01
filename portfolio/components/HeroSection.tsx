'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content animation
    const timeout = setTimeout(() => setShowContent(true), 300); // Delay for animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white to-gray-100 text-textPrimary pt-[80px] md:pt-[90px]" // Adjust padding for navbar height
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div
          className={`md:w-1/2 mb-10 md:mb-0 transform transition duration-1000 ease-out ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-extrabold text-primary mb-4 leading-snug">
            Hi, I'm <span className="text-accent">Muthuraj Vairamuthu</span>
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 relative group overflow-hidden"
          >
            <span className="block">
              Computer Science Junior at{' '}
              <span className="text-primary relative">
                IIIT Delhi
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Building smart solutions with <span className="text-accent">Web Development</span>,{' '}
            <span className="text-accent">Machine Learning</span>, and{' '}
            <span className="text-accent">Human-Computer Interaction (HCI)</span>.
          </p>

          <button
            onClick={() =>
              document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all"
          >
            Contact Me
          </button>

          {/* Social Links */}
          <div className="mt-8 flex space-x-6">
            {[
              { href: 'https://github.com/Muthuraj-Vairamuthu', icon: <FaGithub />, label: 'GitHub' },
              {
                href: 'https://www.linkedin.com/in/muthuraj-vairamuthu-748600258/',
                icon: <FaLinkedin />,
                label: 'LinkedIn',
              },
              { href: 'mailto:muthuraj22307@iiitd.ac.in', icon: <FaEnvelope />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex justify-center items-center bg-gray-200 hover:bg-primary rounded-full shadow-lg transition-all"
                aria-label={label}
              >
                <span className="text-gray-600 group-hover:text-white text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`md:w-1/2 flex justify-center relative transform transition duration-1000 ease-out ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background Blob for Accent */}
          <div className="absolute inset-0 rounded-full bg-purple-100 blur-3xl opacity-30 w-[500px] h-[500px] -z-10"></div>

          {/* Profile Image */}
          <Image
            src="/About Me.jpeg" // Replace with the name of your image in the `public` folder
            alt="Profile Picture"
            width={600}
            height={600}
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
