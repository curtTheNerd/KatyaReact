import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

import { IoCloseCircle } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavBar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    removeNav();
  };

  return (
    <div className="container">
      <header className="header">
        <NavLink to="/">
          <div className="title">
            <h1>Katya Granova</h1>
          </div>
        </NavLink>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem rightBar">
              <NavLink to="/" className={({isActive}) => `navLink ${isActive ? 'navLink-active' : ''}`} onClick={handleClick}>
                Work
              </NavLink>
            </li>
            <li className="navItem rightBar">
              <NavLink to="/about" className={({isActive}) => `navLink ${isActive ? 'navLink-active' : ''}`} onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="navItem rightBar">
              <NavLink to="/cv" className={({isActive}) => `navLink ${isActive ? 'navLink-active' : ''}`} onClick={handleClick}>
                CV
              </NavLink>
            </li>
            <li className="navItem rightBar">
              <NavLink to="/media" className={({isActive}) => `navLink ${isActive ? 'navLink-active' : ''}`} onClick={handleClick}>
                Media
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/artistTalks" className={({isActive}) => `navLink ${isActive ? 'navLink-active' : ''}`} onClick={handleClick}>
                Artist Talks
              </NavLink>
            </li>
          </ul>

          <div onClick={removeNav} className="closeNavBar">
            <IoCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <CiMenuFries className="icon" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
