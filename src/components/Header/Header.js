import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"
import { navigation } from '../../constants';
import { logOut } from '../../redux/operations/authOperation';
import "./Header.css"

const Header = () => {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logOut(token))
    }
    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink className='nav__link' to={navigation.home}>Home</NavLink>
                <NavLink className='nav__link' to={navigation.registration}>Registration</NavLink>
                <NavLink className='nav__link' to={navigation.login}>Login</NavLink>
                {token
                    ? < button type="button" onClick={logout}> Log OUT</button>
                    : null}
            </nav>
        </header>
    );
};

export default Header;