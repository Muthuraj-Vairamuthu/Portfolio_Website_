'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'ALT',
    description: 'A mobile application enhancing collaborative learning with interactive tools and real-time feedback.',
    link: 'https://github.com/Active-Learning-and-Teaching/ALT',
    image: '/ALT.png', 
  },
  {
    title: 'AMR Surveillance',
    description: 'A comprehensive study of antimicrobial resistance trends using Pfizer-ATLAS data for healthcare insights.',
    link: 'https://github.com/noeltiju/BTP-AMR',
    image: '/amr2.png', 
  },
  {
    title: 'Roamify — AI Travel Itinerary Generator',
    description: 'A Chrome extension for personalized travel planning powered by advanced NLP and AI models.',
    link: 'https://github.com/Roamify-Research/Extension',
    image: '/roamify.jpeg', 
  },
  {
    title: 'Covid 19 - Bayesian Networks',
    description: 'A Bayesian network-based research project using WiseR.',
    link: 'https://github.com/Muthuraj-Vairamuthu/Covid--19-Severity-Using-Bayesian-Networks-in-WiseR-/tree/main',
    image: '/cbn6.png',
  },
  {
    title: 'ECG Insights Heart Risk Prediction - ML',
    description: 'A machine learning project leveraging Bayesian Networks and other Statistical ML Models to classify and predict various heart conditions.',
    link: 'https://github.com/akshatparmar2634/CM-Project--Heart-Risk-Prediction-using-ECG',
    image: '/cbn2.png', 
  },
  {
    title: 'MedPlus Connect',
    description: 'React and MySQL-based pharmaceutical delivery platform.',
    link: 'https://github.com/FakePickle/Med_Plus',
    image: '/dbms5.png', 
  },
];


const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="bg-backgroundLight py-16 text-textPrimary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2
            className={`text-3xl font-bold text-primary transform transition duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Projects
          </h2>
          <a
            href="https://github.com/Muthuraj-Vairamuthu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-pink-600 transition-all"
          >
            View More on GitHub →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition transform duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={150}
                  className="rounded-lg w-full max-w-[250px] h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
