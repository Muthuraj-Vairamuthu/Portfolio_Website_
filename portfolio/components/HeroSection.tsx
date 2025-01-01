'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust the threshold to control when the animation triggers
    );

    const section = document.getElementById('home');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-b  text-textPrimary pt-[80px] md:pt-[90px]" 
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div
          className={`md:w-1/2 mb-10 md:mb-0 transform transition duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-extrabold text-primary mb-4 leading-snug">
            Hi, I'm <span className="text-accent">Muthuraj Vairamuthu</span>
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 relative overflow-hidden"
          >
            <span className="block">
              Computer Science Junior at{' '}
              <span className="text-primary dynamic-underline">
                IIIT Delhi
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
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

      {/* Add CSS for Dynamic Underline */}
      <style jsx>{`
        .dynamic-underline {
          position: relative;
        }

        .dynamic-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-cycle 3s infinite ease-in-out;
        }

        @keyframes underline-cycle {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
