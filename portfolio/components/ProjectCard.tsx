const projects = [
  { title: 'Ahuse', description: 'Description for Ahuse', link: '#', image: '/images/project1.png' },
  { title: 'App Dashboard', description: 'Description for App Dashboard', link: '#', image: '/images/project2.png' },
  { title: 'Easy Rent', description: 'Description for Easy Rent', link: '#', image: '/images/project3.png' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg">
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-600 dark:text-blue-400">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
