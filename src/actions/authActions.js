 import axiosWithAuth from '../utils/axiosWithAuth';
 
 export const REGISTER_INIT = 'REGISTER_INIT';
 export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
 export const REGISTER_ERROR = 'REGISTER_ERROR';
 export const LOGIN_INIT = 'LOGIN_INIT';
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export const LOGIN_ERROR = 'LOGIN_ERROR';

 export const postRegisterCredentials = credentials => dispatch => {
    dispatch({ type: REGISTER_INIT })
    axiosWithAuth()
    .post(`/api/auth/register`, credentials)
    .then(res => {
        console.log('registerCredentials: ', res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('err: ', err)
        dispatch({
            type: REGISTER_ERROR,
            payload: err
        })
    })
 }
 
 export const postLoginCredentials = credentials => dispatch => {
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
    })
    .catch(err => {
        console.log('err: ', err)
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        })
    })
 }