import React from 'react'

import { Card, CardDeck, CardBody } from 'reactstrap';

import ProjectCardSubtitle from './ProjectCardSubtitle';
import ProjectCardText from './ProjectCardText';
import ProjectCardTitle from './ProjectCardTitle';

const ProjectCards = ({ projects }) => {
  const cards = projects.map( project => (
      <Card key={project} className="project-cards__card">
        <CardBody className="project-cards__card-body">
          <ProjectCardTitle project={project} />
          <ProjectCardSubtitle project={project} />
          <ProjectCardText project={project} />
        </CardBody>
      </Card>
    )
  )

  return (
    <div className="project-card__container">
      <CardDeck>
        {cards}
      </CardDeck>
    </div>
  )
};

export default ProjectCards;
