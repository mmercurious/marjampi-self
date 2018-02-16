import React from 'react'

import ProjectCards from './ProjectCards';

const Projects = () => {
  const myProjects = ["borrower", "citytrack", "marjampi"];

  return (
    <div className="projects__container">
      <ProjectCards projects={myProjects} />
    </div>
  )
};

export default Projects;
