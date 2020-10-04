import React, { useState } from 'react';
import Nav from './components/Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CurrentRecipe from './components/CurrentRecipe';
import './App.css';
import './App.scss';

function App() {

  const [navState, setNavState] = useState(2)

  const [userData, setUserData] = useState({
    id: '',
    username: ''
})

  return (
    <Router>
      <div className='app'>
        <MuiThemeProvider>
          <Nav setNavState={setNavState} />
          <div className='app-content-container'>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/' exact component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/selected' component={CurrentRecipe} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    </Router>
  );
}

export default App;
