import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
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

  const handleNavToogle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenuNavHandler = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleNavToogle}>
        {navbarOpen ? (
          <MdClose style={{ color: 'darkcyan', width: '20px', height: '20px' }} />
        ) : (
          <FiMenu style={{ color: 'orange', width: '20px', height: '20px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map(({ id, text, path }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="active-link"
              onClick={closeMenuNavHandler}
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
