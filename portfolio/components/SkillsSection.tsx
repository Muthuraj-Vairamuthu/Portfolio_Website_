import { FaPython, FaDocker, FaGit, FaDatabase } from 'react-icons/fa'; // Add FaCode
import { SiCplusplus, SiJavascript, SiMysql, SiReact, SiNextdotjs, SiFirebase, SiFlask, SiGooglecloud, SiLinux, SiStreamlit, SiScikitlearn } from 'react-icons/si';
const SkillsSection = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: <FaPython className="text-blue-500 text-4xl" /> },
        { name: 'C/C++', icon: <SiCplusplus className="text-green-500 text-4xl" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
        { name: 'SQL', icon: <FaDatabase className="text-indigo-500 text-4xl" /> },
      ],
    },
    {
      category: 'Tools & Frameworks',
      items: [
        { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400 text-4xl" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500 text-4xl" /> },
        { name: 'Git', icon: <FaGit className="text-orange-500 text-4xl" /> },
        { name: 'Flask', icon: <SiFlask className="text-gray-500 text-4xl" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
        { name: 'MySQL', icon: <SiMysql className="text-teal-500 text-4xl" /> },
        { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-blue-500 text-4xl" /> },
        { name: 'Streamlit', icon: <SiStreamlit className="text-pink-500 text-4xl" /> },
        { name: 'Linux', icon: <SiLinux className="text-gray-500 text-4xl" /> },
        { name: 'ReactJS', icon: <SiReact className="text-blue-400 text-4xl" /> },
        { name: 'React Native', icon: <SiReact className="text-purple-400 text-4xl" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 text-4xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">My Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-300 pb-2">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
