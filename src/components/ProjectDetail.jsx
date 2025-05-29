import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from './projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id);

  if (!project) {
    return <p className="text-center mt-5">Project not found.</p>;
  }

  return (
    <div className="container py-5">
      <h2>{project.title}</h2>
      <p><strong>Tech Stack:</strong> {project.techStack}</p>
      <p>{project.details || project.description}</p>
      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">View Code</a>
      <br />
      <Link to="/projects" className="btn btn-link mt-3">← Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;
