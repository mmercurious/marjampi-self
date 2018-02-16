import React from 'react'

import { CardSubtitle } from 'reactstrap';

import strings from '../../assets/content/strings.json';

const ProjectCardSubtitle = ({ project }) => {
  const subtitle = project + "Sub";
  return (
    <CardSubtitle className="project-card-subtitle">
      {strings.projects[subtitle]}
    </CardSubtitle>
  )
};

export default ProjectCardSubtitle;
