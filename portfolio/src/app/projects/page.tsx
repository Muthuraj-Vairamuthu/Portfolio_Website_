import { projects } from '../../data/project';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
