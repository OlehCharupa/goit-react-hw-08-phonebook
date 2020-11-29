import React from 'react';
import { NavLink } from "react-router-dom"
import { navigation } from '../../constants';
import "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink className='nav__link' to={navigation.home}>Home</NavLink>
                <NavLink className='nav__link' to={navigation.registration}>Registration</NavLink>
                <NavLink className='nav__link' to={navigation.login}>Login</NavLink>
            </nav>
        </header>
    );
};

export default Header;