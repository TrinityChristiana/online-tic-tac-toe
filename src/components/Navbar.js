import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const NavLink = ({ path, title }) => {
    const isActive = path === location.pathname;
    return (
      <li className="nav-item">
        <Link
          className={`nav-link ${isActive ? 'active' : ''}`}
          aria-current="page"
          to={path}
        >
          {title}
        </Link>
      </li>
    );
  };

  NavLink.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  return (
    <div>
      <ul className="nav nav-tabs nav-fill">
        <NavLink path="/" title="Home" />
        <NavLink path="/friends" title="Friends" />
        <NavLink path="/games" title="Games" />
        <NavLink path="/settings" title="Settings" />
      </ul>
    </div>
  );
};

export default Navbar;
