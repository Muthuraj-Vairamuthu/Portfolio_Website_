import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectCard />
      <ContactForm />
    </>
  );
};

export default HomePage;
