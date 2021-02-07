import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#3345B',
  },
  activeLink: {
    color: '#2222B',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
