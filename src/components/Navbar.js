import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  return (
    <nav className="navBar">
      <ul>
        {links.map(({ id, text, path }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="active-link"
              style={({ isActive }) => ({
                textDecoration: 'none',
                margin: '0 10px',
                borderBottom: isActive ? 'solid 5px orange' : '',
                color: isActive ? 'orange' : 'black',
              })}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
