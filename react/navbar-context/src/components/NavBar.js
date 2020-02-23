import React, { useContext } from 'react';

import NavBarContext from '../contexts/NavBarContext';

import './NavBar.css';

const NavBar = () => {

    const context = useContext(NavBarContext);

    return (
<nav className="navbar navbar-dark rnavbar">
  <ul className="navbar-nav ml-md-auto"></ul>
  <span className="navbar-text">
    Hi {context.state.name}!
  </span>
</nav>
    );
};

export default NavBar;