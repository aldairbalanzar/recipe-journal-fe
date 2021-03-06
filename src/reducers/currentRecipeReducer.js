import {
    CURRENT_RECIPE_GET_INIT,
    CURRENT_RECIPE_GET_SUCCESS,
    CURRENT_RECIPE_GET_ERROR,
    INGREDIENT_POST_INIT,
    INGREDIENT_POST_SUCCESS,
    INGREDIENT_POST_ERROR,
    STEP_POST_INIT,
    STEP_POST_SUCCESS,
    STEP_POST_ERROR
} from '../actions/currentRecipeActions';

const init = {
    recipe: {},
    ingredients: [],
    steps: [],
    message: '',
    status: null,
    isGetting: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false,
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
                recipe: {...action.payload.recipe.data},
                ingredients: [...action.payload.recipe.ingredients],
                steps: [...action.payload.recipe.steps],
                isGetting: false
            }
        case CURRENT_RECIPE_GET_ERROR:
            return {
                ...state,
                message: action.payload.data.errorMessage,
                isGetting: false
            }
        case INGREDIENT_POST_INIT:
            return {
                ...state,
                isPosting: true
            }
        case INGREDIENT_POST_SUCCESS:
            return {
                ...state,
                ingredients: [...state.ingredients, {...action.payload.response}],
                message: action.payload.message,
                isPosting: false
            }
        case INGREDIENT_POST_ERROR:
            return {
                ...state,
                message: action.payload.data.errorMessage,
                isPosting: false
            }
        case STEP_POST_INIT:
            return {
                ...state,
                isPosting: true
            }
        case STEP_POST_SUCCESS:
            return {
                ...state,
                steps: [...action.payload.steps],
                isPosting: false
            }
        case STEP_POST_ERROR:
            return {
                ...state,
                message: action.payload.data.errorMessage,
                isPosting: false
            }
        default:
            return state
    }
}

export default currentRecipeReducer;