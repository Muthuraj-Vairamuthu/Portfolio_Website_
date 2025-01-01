'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Image */}
        <div className="md:w-1/3 flex justify-center mb-10 md:mb-0">
          <div className="relative group">
            <Image
              src="/About Me.jpeg" // Replace with your actual image
              alt="About Me"
              width={350}
              height={350}
              className="rounded-full shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute -inset-2 rounded-full bg-purple-100 blur-xl opacity-30 -z-10"></div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="md:w-2/3 transform transition duration-1000 ease-out opacity-0 translate-y-10 animate-fade-in-up"
        >
          <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            I'm <span className="text-primary">Muthuraj Vairamuthu</span>, a Computer Science Engineering 
            junior at <span className="text-accent">IIIT Delhi</span>. As a 
            <span className="text-accent"> full-stack developer</span>, I specialize in 
            <span className="text-accent"> Next.js</span>, <span className="text-accent"> React.js</span>, and backend frameworks like 
            <span className="text-accent"> Node.js</span> and <span className="text-accent"> Flask</span>. My goal is to create 
            modern, scalable web applications with real-world impact.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            At <span className="text-primary">TavLab</span>, I work in the 
            <span className="text-accent"> AI/ML in Public Healthcare</span> domain, blending 
            <span className="text-accent"> computer science</span> with 
            <span className="text-accent"> computational biology</span> to generate actionable insights for 
            healthcare providers and institutions. My work focuses on delivering meaningful solutions 
            that bridge technology and healthcare.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As a member of <span className="text-primary">ACM SIGCHI</span>, I am inclined towards creating 
            interdisciplinary technologies that contribute to making the world a better place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
