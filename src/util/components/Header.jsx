import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../css/header.min.css';
import strings from '../../assets/content/strings.json';

/*
  TODO: Routing and links
*/

const Header = () => (
  <div className="header__container">
    <Nav>
      <NavItem className="header__nav-item">
        <NavLink href="#">&gt; {strings.nav.index}</NavLink>
      </NavItem>
      <NavItem className="header__nav-item">
        <NavLink href="#">&gt; {strings.nav.projects}</NavLink>
      </NavItem>
      <NavItem className="header__nav-item">
        <NavLink href="#">&gt; {strings.nav.tech}</NavLink>
      </NavItem>
    </Nav>
  </div>
);


export default Header;
