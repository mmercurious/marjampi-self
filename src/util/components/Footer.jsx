import React from 'react';

import '../css/footer.min.css';
import strings from '../../assets/content/strings.json';

const Footer = () => (
  <div className="footer__container">
    <div className="footer_info">
      {strings.contact.email}: {strings.contact.emailAddress}
      <br/>
      {strings.contact.github}: {strings.contact.githubUser}
    </div>
  </div>
);

export default Footer;
