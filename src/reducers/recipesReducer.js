import { 
    RECIPES_GET_INIT,
    RECIPES_GET_SUCCESS,
    RECIPES_GET_ERROR,
    RECIPES_POST_INIT,
    RECIPES_POST_SUCCESS,
    RECIPES_POST_ERROR,
    TOGGLE_CREATE_RECIPE_FORM, RECIPES_DELETE_INIT, RECIPES_DELETE_SUCCESS, RECIPES_DELETE_ERROR 
} from '../actions/recipesActions';

const init = {
    recipes: [],
    message: '',
    isGetting: false,
    isPosting: false,
    isPutting: false,
    isDeleting: false,
}

const recipesReducer = (state=init, action={}) => {
    switch(action.type) {
        case RECIPES_GET_INIT:
            return {
                ...state,
                isGetting: true
            }
        case RECIPES_GET_SUCCESS:
            return {
                ...state,
                recipes: [...action.payload.recipes],
                message: action.payload.message,
                isGetting: false
            }
        case RECIPES_GET_ERROR:
            return {
                ...state,
                message: action.payload.message,
                isGetting: false
            }
        case RECIPES_POST_INIT:
            return {
                ...state,
                isPosting: true
            }
        case RECIPES_POST_SUCCESS:
            return {
                ...state,
                recipes: [...action.payload.recipes],
                message: action.payload.message,
                isPosting: false
            }
        case RECIPES_POST_ERROR:
            return {
                ...state,
                message: action.payload.message,
                isPosting: false
            }
        case RECIPES_DELETE_INIT:
            return {
                ...state,
                isDeleting: true,

            }
        case RECIPES_DELETE_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                recipes: [...action.payload.recipes],
                isDeleting: false,
            }
        case RECIPES_DELETE_ERROR:
            return {
                ...state,
                message: action.payload.message,
                recipes: [...action.payload.recipes],
                isDeleting: false,
            }
        default:
            return state
    }
}

export default recipesReducer;