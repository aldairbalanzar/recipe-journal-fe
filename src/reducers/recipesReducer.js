import { LOGOUT_INIT } from '../actions/authActions';
import { 
    RECIPES_GET_INIT,
    RECIPES_GET_SUCCESS,
    RECIPES_GET_ERROR,
    RECIPES_POST_INIT,
    RECIPES_POST_SUCCESS,
    RECIPES_POST_ERROR,
    RECIPES_DELETE_INIT,
    RECIPES_DELETE_SUCCESS,
    RECIPES_DELETE_ERROR,
    RECIPES_PUT_SUCCESS,
    RECIPES_PUT_ERROR 
} from '../actions/recipesActions';

const init = {
    recipes: [],
    message: '',
    status: null,
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
                message: action.payload.data.errorMessage,
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
                message: action.payload,
                isPosting: false
            }
        case RECIPES_PUT_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                recipes: [...action.payload.recipes],
                isPutting: false
            }
        case RECIPES_PUT_ERROR:
            return {
                ...state,
                message: action.payload.data.errorMessage,
                isPutting: false
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
                message: action.payload.data.errorMessage,
                isDeleting: false,
            }
        case LOGOUT_INIT:
            return {
                ...state,
                recipes: [],
                message: 'successfully logged out!',
                status: 500,
                isGetting: false,
                isPosting: false,
                isPutting: false,
                isDeleting: false,

            }
        default:
            return state
    }
}

export default recipesReducer;