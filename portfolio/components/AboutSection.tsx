const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/images/profile-placeholder.png"
          alt="About"
          className="w-48 md:w-64 rounded-full shadow-lg mb-6 md:mb-0 md:mr-6"
        />
        <p className="text-lg">
          I’m a Computer Science Engineering student at IIIT Delhi, specializing in frontend development and ML.
          As a member of ACM SIGCHI, I explore HCI and its applications in education, sports, and IoT.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
