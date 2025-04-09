import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

import { IoCloseCircle } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {

    const handleClick  = () => {
        window.scrollTo(0, 0);
    }

    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavBar');
    }
    const removeNav = () => {
        setActive('navBar');
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
                        <li className="navItem rightBar"><Link to="/" className='navLink' onClick={handleClick}>Home</Link></li>
                        <li className="navItem rightBar"><Link to="/work" className='navLink' onClick={handleClick}>Work</Link></li>
                        <li className="navItem rightBar"><Link to="/about" className='navLink' onClick={handleClick}>About</Link></li>
                        <li className="navItem rightBar"><Link to="/cv" className='navLink' onClick={handleClick}>CV</Link></li>
                        <li className="navItem"><Link to="/media" className='navLink' onClick={handleClick}>Media</Link></li>
                    </ul>

                    <div onClick={removeNav} className="closeNavBar">
                        <IoCloseCircle className='icon' />
                    </div>
                </div>
                
                <div onClick={showNav} className="toggleNavBar">
                    <MdMenuOpen className='icon' />
                </div>
            </header>
        </div>
    )
}

export default Navbar