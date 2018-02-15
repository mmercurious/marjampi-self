import React from 'react';

import strings from '../../assets/content/strings.json';
import '../css/bio.min.css';

const Bio = () => (
  <div className="bio__container">
    <div className="bio__subtitle">
      {strings.bio.who}
    </div>
    <div className="bio__content">
      {strings.bio.basic}
    </div>
    <div className="bio__subtitle">
      {strings.bio.computors}
    </div>
    <div className="bio__content">
      {strings.bio.it}
    </div>
    <div className="bio__subtitle">
      {strings.bio.important}
    </div>
    <div className="bio__content">
      {strings.bio.personal}
    </div>
  </div>
);

export default Bio;
