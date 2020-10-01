import React from 'react'

const Nav = ({setNavState}) => {
    return (
        <nav className='nav-container'>
            <ul>
                <a onClick={() => {setNavState(1)}}><li>Register</li></a>
                <a onClick={() => {setNavState(2)}}><li>Login</li></a>
                <a onClick={() => {setNavState(3)}}><li>Recipes</li></a>
            </ul>
            <h1 className='app-title'>Recipe Journal</h1>
        </nav>
    )
}

export default Nav
