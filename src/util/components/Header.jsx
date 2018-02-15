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
      <NavItem>
        <NavLink href="#">{strings.nav.index}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">{strings.nav.projects}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">{strings.nav.tech}</NavLink>
      </NavItem>
    </Nav>
  </div>
);


export default Header;
