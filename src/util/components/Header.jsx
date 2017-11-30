import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../css/header.min.css';
import strings from '../../assets/content/strings.json';

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <Nav>
          <NavItem>
            <NavLink href="#">Index</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{strings.nav.tech}</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
};

export default Header;
