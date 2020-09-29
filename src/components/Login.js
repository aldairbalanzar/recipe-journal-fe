import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton } from 'material-ui';
import { postLoginCredentials } from '../actions/authActions'
import { connect } from 'react-redux';

const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [message, setMessage] = useState(null)
  
  const handleChanges = e => {
    e.preventDefault()
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(!credentials.username || !credentials.password) {
        setMessage('Please provide required credentials before submitting')
        return
    }

    console.log('credentials: ', credentials)
    props.postLoginCredentials(credentials)
    setCredentials({
      username: '',
      password: ''
    })
  }
  
  // console.log('state: ', props)
  console.log('credentials', credentials)

  return (
    <div className="form-container">
      <MuiThemeProvider>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label className='field-container' htmlFor="username">
                <TextField
                className='input-field'
                type="text"
                onChange={handleChanges}
                id='username'
                name='username'
                value={credentials.username}
                placeholder='username'
                floatingLabelText='username'
                />
            </label>

            <label className='field-container' htmlFor="password">
                <TextField
                className='input-field'
                type="text"
                onChange={handleChanges}
                id='password'
                name='password'
                value={credentials.password}
                placeholder='password'
                floatingLabelText='password'
                />
            </label>
            
          <RaisedButton className='button-submit' type='submit'>Submit</RaisedButton>
        </form>

        <p>{props.userData.message ? props.userData.message : null}</p>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      userData: state.authReducer
    }
  }
  
  export default connect(mapStateToProps, { postLoginCredentials })(Login);