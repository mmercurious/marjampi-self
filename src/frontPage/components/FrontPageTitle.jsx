import React from 'react';

import '../css/frontPage.min.css';
import strings from '../../assets/content/strings.json';

const FrontPageTitle = () => (
  <div className="front-page-title__container">
    <h1 className="front-page-title__h1">{strings.titles.title}</h1>
    <h2 className="front-page-title__h2">{strings.titles.subtitle}</h2>
  </div>
);

export default FrontPageTitle;
