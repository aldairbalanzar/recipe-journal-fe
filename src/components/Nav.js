import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({setNavState}) => {
    return (
        <nav className='nav-container'>
            <ul>
                <Link className='link' to='/register'><li>Register</li></Link>
                <Link className='link' to='/'><li>Login</li></Link>
                <Link className='link' to='/dashboard'><li>Recipes</li></Link>
            </ul>
            <h1 className='app-title'>Recipe Journal</h1>
        </nav>
    )
}

export default Nav
