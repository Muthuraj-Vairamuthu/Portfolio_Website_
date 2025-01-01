import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p>
          I’m Muthuraj Vairamuthu, a CSE student at IIIT Delhi, passionate about software development, ML, and HCI.
        </p>
      </section>
    </>
  );
};

export default Home;
