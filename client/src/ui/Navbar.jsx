import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function NavLink({ to, children }) {
  return (
    <div>
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        {children}
      </Link>
    </div>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
    }}
    >
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}
