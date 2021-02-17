import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NavLink({ to, children }) {
  const history = useHistory();

  return (
    <motion.div
      style={{ padding: 12, cursor: 'pointer', color: 'rgb(105,105,105)' }}
      whileHover={{
        color: 'rgb(234, 51, 64)',
        y: -10,
      }}
      // Onclick makes it so that click after elem has moved still works
      onClick={() => {
        history.push(to)
      }}
    >
      <Link
        to={to}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function Navbar() {
  return (
    <div style={{
      padding: "32px 64px",
      width: '100%',
      display: 'flex',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}
    >
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        maxWidth: 600,
      }}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>
  );
}
