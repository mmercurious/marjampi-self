import React from 'react';

import Header from '../../util/components/Header';
import Footer from '../../util/components/Footer';

/*
  TODO: make into stateless components
*/

class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <h2>Marjampi</h2>
          <h1>Welcome fellas</h1>
        </div>

        <div>
          Jea
        </div>
        <Footer />
      </div>
    );
  }
}


export default FrontPage;
