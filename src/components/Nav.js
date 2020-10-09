import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleLogout } from '../actions/authActions';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

const Nav = (props) => {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState('');

    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem('username')))
    }, [props.userData.username])

    console.log('user: ', isLoggedIn)
    return (
        <nav className='nav-container'>
            <ul className='links-container'>
                <Link className='link' to='/dashboard'><li>Dashboard</li></Link>
                <Link className='link' to='/register'><li>Register</li></Link>
                {JSON.parse(localStorage.getItem('username'))
                    ? <Link className='link' onClick={() => {props.handleLogout(history)}}>
                        <li>Logout</li>
                    </Link>
                    : <Link className='link' to='/'><li>Login</li></Link>
                }
            </ul>
            <div className='title-container'>
                <h1 className='app-title'>Recipe Journal</h1>
            </div>
            <div className="user-data-container">
                <h3 className="username">
                    {isLoggedIn ? <i className="fas fa-user"></i> : null}{props.userData.username}
                </h3>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipesData: state.recipesReducer
    }
  };
  
export default connect(mapStateToProps, { handleLogout })(Nav);
