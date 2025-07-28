import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

import { IoCloseCircle } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavBar');
    }
    const removeNav = () => {
        setActive('navBar');
    }

    const handleClick  = () => {
        window.scrollTo(0, 0);
        removeNav();
    }

    return (
        <div className='container'>
            <header className='header'>                
                <Link to="/">
                    <div className="title">
                        <h1>Katya Granova</h1>
                    </div>
                </Link>
                
                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem rightBar"><Link to="/" className='navLink' onClick={handleClick}>Work</Link></li>
                        <li className="navItem rightBar"><Link to="/about" className='navLink' onClick={handleClick}>About</Link></li>
                        <li className="navItem rightBar"><Link to="/cv" className='navLink' onClick={handleClick}>CV</Link></li>
                        <li className="navItem rightBar"><Link to="/media" className='navLink' onClick={handleClick}>Media</Link></li>
                        <li className="navItem"><Link to="/artistTalks" className='navLink' onClick={handleClick}>Artist Talks</Link></li>
                    </ul>

                    <div onClick={removeNav} className="closeNavBar">
                        <IoCloseCircle className='icon' />
                    </div>
                </div>
                
                <div onClick={showNav} className="toggleNavBar">
                    <HiMenuAlt3 className='icon' />
                </div>
            </header>
        </div>
    )
}

export default Navbar