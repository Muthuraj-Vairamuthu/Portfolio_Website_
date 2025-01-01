const projects = [
  {
    title: 'Ahuse',
    description: 'Description for Ahuse.',
    link: '#',
  },
  {
    title: 'App Dashboard',
    description: 'Description for App Dashboard.',
    link: '#',
  },
  {
    title: 'Easy Rent',
    description: 'Description for Easy Rent.',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-backgroundLight py-16 text-textPrimary"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
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
