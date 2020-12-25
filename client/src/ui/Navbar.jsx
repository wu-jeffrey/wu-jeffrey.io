import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

export function NavLink({ to, children }) {
  return (
    <motion.div
      style={{ padding: 12, borderRadius: 100 }}
      whileHover={{
        y: -10
      }}>
      <Link
        to={to}
        style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}
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
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: '32px 64px',
      boxSizing: 'border-box',
    }}
    >
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}
