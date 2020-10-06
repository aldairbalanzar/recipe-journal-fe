import axiosWithAuth from '../utils/axiosWithAuth';

export const CURRENT_RECIPE_GET_INIT = 'CURRENT_RECIPE_GET_INIT';
export const CURRENT_RECIPE_GET_SUCCESS = 'CURRENT_RECIPE_GET_SUCCESS';
export const CURRENT_RECIPE_GET_ERROR = 'CURRENT_RECIPE_GET_ERROR';
export const INGREDIENT_POST_INIT = 'INGREDIENT_POST_INIT';
export const INGREDIENT_POST_SUCCESS = 'INGREDIENT_POST_SUCCESS';
export const INGREDIENT_POST_ERROR = 'INGREDIENT_POST_ERROR';
export const STEP_POST_INIT = 'STEP_POST_INIT';
export const STEP_POST_SUCCESS = 'STEP_POST_SUCCESS';
export const STEP_POST_ERROR = 'STEP_POST_ERROR';

export const getRecipeData = (userId, recipeId) => dispatch => {
    dispatch({ type: CURRENT_RECIPE_GET_INIT })
    axiosWithAuth()
    .get(`/api/recipes/${userId}/${recipeId}`)
    .then(res => {
        console.log('getRecipeData: ', res.data)
        dispatch({
            type: CURRENT_RECIPE_GET_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('getRecipeData err: ', err.response)
        dispatch({
            type: CURRENT_RECIPE_GET_ERROR,
            payload: err.response
        })
    })
};

export const postIngredient = (ingredientData, userId, recipeId) => dispatch => {
    dispatch({ type: INGREDIENT_POST_INIT })
    axiosWithAuth()
    .post(`/api/recipes/${userId}/${recipeId}/ingredients`, ingredientData)
    .then(res => {
        console.log('postIngredient: ', res.data)
        dispatch({
            type: INGREDIENT_POST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('postIngredient err: ', err.response)
        dispatch({
            type: INGREDIENT_POST_ERROR,
            payload: err.response
        })
    })
};

export const postStep = (stepData, userId, recipeId) => dispatch => {
    dispatch({ type: STEP_POST_INIT })
    axiosWithAuth()
    .post(`/api/recipes/${userId}/${recipeId}/steps`, stepData)
    .then(res => {
        console.log('postStep: ', res.data)
        dispatch({
            type: STEP_POST_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('postStep err: ', err.response)
        dispatch({
            type: STEP_POST_ERROR,
            payload: err.response
        })
    })
};