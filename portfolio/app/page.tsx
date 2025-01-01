import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about-me">
          <AboutSection />
        </section>
        <section id="my-expertise">
          <SkillsSection />
        </section>
        <section id="my-projects">
          <ProjectCard />
        </section>
        <section id="contact-me">
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default HomePage;
