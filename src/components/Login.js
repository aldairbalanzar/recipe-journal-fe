import React, { useState } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { postLoginCredentials } from '../actions/authActions';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [message, setMessage] = useState(null)
  const history = useHistory()
  
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
    props.postLoginCredentials(credentials, history)
    setCredentials({
      username: '',
      password: ''
    })
  }
  
  // console.log('credentials', credentials)

  return (
    <div className="form-container">
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
    </div>
  )
}

const mapStateToProps = state => {
    return {
      userData: state.authReducer
    }
  }
  
  export default connect(mapStateToProps, { postLoginCredentials })(Login);