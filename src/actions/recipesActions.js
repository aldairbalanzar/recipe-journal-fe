import axiosWithAuth from '../utils/axiosWithAuth';

export const RECIPES_GET_INIT = 'RECIPES_GET_INIT';
export const RECIPES_GET_SUCCESS = 'RECIPES_GET_SUCCESS';
export const RECIPES_GET_ERROR = 'RECIPES_GET_ERROR';
export const RECIPES_POST_INIT = 'RECIPES_POST_INIT';
export const RECIPES_POST_SUCCESS = 'RECIPES_POST_SUCCESS';
export const RECIPES_POST_ERROR = 'RECIPES_POST_ERROR';
export const RECIPES_PUT_INIT = 'RECIPES_PUT_INIT';
export const RECIPES_PUT_SUCCESS = 'RECIPES_PUT_SUCCESS';
export const RECIPES_PUT_ERROR = 'RECIPES_PUT_ERRROR';
export const RECIPES_DELETE_INIT = 'RECIPES_DELETE_INIT';
export const RECIPES_DELETE_SUCCESS = 'RECIPES_DELETE_SUCCESS';
export const RECIPES_DELETE_ERROR = 'RECIPES_DELETE_ERROR';

export const getRecipes = userId => dispatch => {
    dispatch({ type: RECIPES_GET_INIT })
    axiosWithAuth()
    .get(`/api/recipes/${userId}`)
    .then(res => {
        console.log('getRecipes: ', res.data)
        dispatch({
            type: RECIPES_GET_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('getRecipes err: ', err.response)
        dispatch({
            type: RECIPES_GET_ERROR,
            payload: err.response
        })
    })
};

export const postRecipe = (newRecipe, userId) => dispatch => {
    dispatch({ type: RECIPES_POST_INIT})
    axiosWithAuth()
    .post(`/api/recipes/${userId}`, newRecipe)
    .then(res => {
        console.log('postRecipe: ', res.data)
        dispatch({
            type: RECIPES_POST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('postRecipe err: ', err.response)
        dispatch({
            type: RECIPES_POST_ERROR,
            payload: err.response
        })
    })
};

export const updateRecipe = (recipeUpdate, userId) => dispatch => {
    dispatch({ type: RECIPES_PUT_INIT })
    axiosWithAuth()
    .put(`/api/recipes/${userId}`, recipeUpdate)
    .then(res => {
        console.log('updateRecipe: ', res.data)
        dispatch({
            type: RECIPES_PUT_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('updateRecipe err: ', err.response)
        dispatch({
            type: RECIPES_DELETE_ERROR,
            payload: err.response
        })
    })
};

export const deleteRecipe = (recipeId, userId) => dispatch => {
    dispatch({ type: RECIPES_DELETE_INIT })
    axiosWithAuth()
    .delete(`/api/recipes/${userId}/${recipeId}`)
    .then(res => {
        console.log('deleteRecipe: ', res.data)
        dispatch({
            type: RECIPES_DELETE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('deleteRecipe: ', err.response)
    })
};

