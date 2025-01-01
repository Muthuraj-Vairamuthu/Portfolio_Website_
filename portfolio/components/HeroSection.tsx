'use client';
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I am <span className="text-yellow-400">Muthuraj</span>
          </h1>
          <p className="text-lg mb-6">
            Undergrad Researcher @ TavLab | Passionate about Web Development, ML, and HCI.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-yellow-400 text-blue-700 py-2 px-4 rounded shadow hover:bg-yellow-500"
          >
            View My Work
          </button>
        </div>
        <img
          src="/images/profile-placeholder.png"
          alt="Profile"
          className="w-48 md:w-64 rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
