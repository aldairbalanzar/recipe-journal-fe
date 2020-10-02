import axiosWithAuth from '../utils/axiosWithAuth';

export const CURRENT_RECIPE_GET_INIT = 'CURRENT_RECIPE_GET_INIT';
export const CURRENT_RECIPE_GET_SUCCESS = 'CURRENT_RECIPE_GET_SUCCESS';
export const CURRENT_RECIPE_GET_ERROR = 'CURRENT_RECIPE_GET_ERROR';

export const getRecipeData = (userId, recipeId) => dispatch => {
    dispatch({ type: CURRENT_RECIPE_GET_INIT })
    axiosWithAuth()
    .get(`/api/recipes/${userId}/${recipeId}`)
    .then(res => {
        console.log('res: ', res.data)
        dispatch({
            type: CURRENT_RECIPE_GET_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log('err: ', err)
        dispatch({
            type: CURRENT_RECIPE_GET_ERROR,
            payload: err
        })
    })
}