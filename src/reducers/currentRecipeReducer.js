import {
    CURRENT_RECIPE_GET_INIT,
    CURRENT_RECIPE_GET_SUCCESS,
    CURRENT_RECIPE_GET_ERROR
} from '../actions/currentRecipeActions';

const init = {
    recipe: {},
    steps: [],
    ingredients: [],
    isGetting: false,
}

const currentRecipeReducer = (state=init, action={}) => {
    switch(action.type) {
        case CURRENT_RECIPE_GET_INIT:
            return {
                ...state,
                isGetting: true
            }
        case CURRENT_RECIPE_GET_SUCCESS:
            return {
                ...state,
                ...action.payload.recipe,
                ...action.payload.steps,
                ...action.payload.ingredients,
                isGetting: false
            }
        case CURRENT_RECIPE_GET_ERROR:
            return {
                ...state,
                message: action.payload.message,
                isGetting: false
            }
        default:
            return state
    }
}

export default currentRecipeReducer;