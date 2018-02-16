import React from 'react'

import { CardTitle } from 'reactstrap';

import strings from '../../assets/content/strings.json';

const ProjectCardTitle = ({ project }) => {
  const title = project + "Title";

  return (
    <CardTitle className="project-card-title">
      {strings.projects[title]}
    </CardTitle>
  )
};

export default ProjectCardTitle;
