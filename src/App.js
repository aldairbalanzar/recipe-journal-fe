import React, { useState } from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Register from './components/Register';
import Login from './components/Login';
import Recipes from './components/Recipes';
import './App.css';
import './App.scss';

function App() {

  const [navState, setNavState] = useState(2)

  const [userData, setUserData] = useState({
    id: '',
    username: ''
})

  return (
    <div className='app'>
      <Nav setNavState={setNavState} />
      <Title setNavState={setNavState} />
      {navState === 1 && <Register />}
      {navState === 2 && <Login setUserData={setUserData} userData={userData} />}
      {navState === 3 && <Recipes userData={userData} />}
    </div>
  );
}

export default App;
