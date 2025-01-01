const ProjectCard = ({ title, description, skills, link }: any) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <p className="mt-2 text-sm">Skills: {skills.join(', ')}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
