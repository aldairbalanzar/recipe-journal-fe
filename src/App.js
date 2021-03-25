import React from 'react';
import Nav from './components/Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Beforeunload } from 'react-beforeunload';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CurrentRecipe from './components/CurrentRecipe';
import './App.css';
import './App.scss';

function App() {

  const handleOnUnload = () => {
    window.localStorage.setItem('token', JSON.stringify(''));
    window.localStorage.setItem('id', JSON.stringify(''))
    window.localStorage.setItem('username', JSON.stringify(''))
  }

  return (
    <Beforeunload onBeforeunload={handleOnUnload}>
      <Router>
        <div className='app'>
          <MuiThemeProvider>
            <Nav />
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
    </Beforeunload>
  );
}

export default App;
