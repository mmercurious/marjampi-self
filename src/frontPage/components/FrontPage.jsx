import React from 'react';

import Bio from './Bio'
import Footer from '../../util/components/Footer';
import FrontPageTitle from './FrontPageTitle';
import Header from '../../util/components/Header';


const FrontPage = () => (
  <div>
    <Header />
    <FrontPageTitle />
    <Bio />
    <Footer />
  </div>
);

export default FrontPage;
