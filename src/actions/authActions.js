 import axiosWithAuth from '../utils/axiosWithAuth';
 
 export const REGISTER_INIT = 'REGISTER_INIT';
 export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
 export const REGISTER_ERROR = 'REGISTER_ERROR';
 export const LOGIN_INIT = 'LOGIN_INIT';
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export const LOGIN_ERROR = 'LOGIN_ERROR';

 export const postRegisterCredentials = (credentials, history) => dispatch => {
    dispatch({ type: REGISTER_INIT })
    axiosWithAuth()
    .post(`/api/auth/register`, credentials)
    .then(res => {
        console.log('registerCredentials: ', res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        history.push('/')
    })
    .catch(err => {
        console.log('postRegisterCredentials err: ', err.response)
        dispatch({
            type: REGISTER_ERROR,
            payload: err.response
        })
    })
 }
 
 export const postLoginCredentials = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_INIT })
    axiosWithAuth()
    .post(`/api/auth/login`, credentials)
    .then(res => {
        console.log('loginCredentials: ', res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        window.localStorage.setItem('token', JSON.stringify(res.data.token));
        window.localStorage.setItem('id', JSON.stringify(res.data.id))
        window.localStorage.setItem('username', JSON.stringify(res.data.username))
        history.push('/dashboard')
    })
    .catch(err => {
        console.log('postLoginCredentials err: ', err.response)
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response
        })
    })
 }