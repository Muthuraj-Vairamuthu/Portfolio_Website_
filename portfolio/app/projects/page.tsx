import { projects } from "../../data/project";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <section className="container py-12" id="projects">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
