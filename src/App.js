import React, { useState } from 'react';
import Nav from './components/Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
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
      <MuiThemeProvider>
        <Nav setNavState={setNavState} />
        {/* <Title setNavState={setNavState} /> */}
        {navState === 1 && <Register />}
        {navState === 2 && <Login setUserData={setUserData} userData={userData} />}
        {navState === 3 && <Dashboard userData={userData} />}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
