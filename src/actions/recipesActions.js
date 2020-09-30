import axiosWithAuth from '../utils/axiosWithAuth';
import { REGISTER_ERROR } from './authActions';

export const RECIPES_INIT = 'RECIPES_INIT';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';
export const RECIPES_ERROR = 'RECIPES_ERROR';

export const getRecipes = (id) => dispatch => {
    console.log(id)
    dispatch({ type: RECIPES_INIT })
    axiosWithAuth()
    .get(`/api/recipes`)
    .then(res => {
        console.log('getRecipes: ', res.data)
        // dispatch({ type: RECIPES_SUCCESS })
    })
    .catch(err => {
        console.log('err: ', err)
        // dispatch({ type: REGISTER_ERROR })
    })
}

