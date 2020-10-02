import React from 'react';
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
import { connect } from 'react-redux';

const CurrentRecipe = (props) => {

    console.log(props.recipeData)
    return (
        <div>
            <h3 className='recipe-name'>{props.recipeData.recipe.recipeName}</h3>
            <p className='description'>{props.recipeData.recipe.description}</p>
            <div className='recipe-info-container'>
                <p className='recipe-info'>Prep Time: {props.recipeData.recipe.prepTime}</p>
                <p className='recipe-info'>Cooking Time: {props.recipeData.recipe.cookTime}</p>
                <p className='recipe-info'>Yields: {props.recipeData.recipe.yields}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipeData: state.currentRecipeReducer
    }
  };
  
export default connect(mapStateToProps, { updateRecipe, deleteRecipe, getRecipeData })(CurrentRecipe);
