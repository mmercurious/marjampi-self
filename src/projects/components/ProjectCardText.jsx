import React from 'react'

import { CardText } from 'reactstrap';

import strings from '../../assets/content/strings.json';

const ProjectCardText = ({ project }) => {
  const text = project + "Text";

  return (
    <CardText className="project-card-text">
      {strings.projects[text]}
    </CardText>
  )
};

export default ProjectCardText;
