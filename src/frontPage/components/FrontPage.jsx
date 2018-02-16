import React from 'react';

import Bio from './Bio'
import Footer from '../../util/components/Footer';
import FrontPageTitle from './FrontPageTitle';
import Header from '../../util/components/Header';

import Projects from '../../projects/components/Projects';

/*
  TODO: Remove Projects from here, was here just for a quick check-up
*/

const FrontPage = () => (
  <div>
    <Header />
    <FrontPageTitle />
    <Bio />
    <Projects />
    <Footer />
  </div>
);

export default FrontPage;
