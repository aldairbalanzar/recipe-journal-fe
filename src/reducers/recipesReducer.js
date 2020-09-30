import { RECIPES_INIT, RECIPES_SUCCESS, RECIPES_ERROR } from '../actions/recipesActions';

const init = {
    recipes: [],
    message: '',
    isGetting: false
}

const recipesReducer = (state=init, action={}) => {
    switch(action.type) {
        case RECIPES_INIT:
            return {
                ...state,
                isGetting: true
            }

        case RECIPES_SUCCESS:
            return {
                ...state,
                recipes: [...action.payload.recipes],
                message: action.payload.message,
                isGetting: false
            }
        case RECIPES_ERROR:
            return {
                ...state,
                message: action.payload.message,
                isGetting: false
            }
        default:
            return state
    }
}

export default recipesReducer;