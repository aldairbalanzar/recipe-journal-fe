import authReducer from './authReducer';
// import currentRecipeReducer from './currentRecipeReducer';
// import recipesReducer from './recipesReducer';
import { combineReducers } from 'redux';

const godReducer = combineReducers({
    authReducer
})

export default godReducer