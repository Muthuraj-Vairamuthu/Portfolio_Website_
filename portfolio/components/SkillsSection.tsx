const skills = [
  { name: 'React.js', icon: '/icons/react.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Machine Learning', icon: '/icons/ml.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded shadow text-center">
            <p className="font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
