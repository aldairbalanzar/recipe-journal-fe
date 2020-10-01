import React from 'react'
import { deleteRecipe } from '../actions/recipesActions';
import { connect } from 'react-redux';

const RecipeCard = (props) => {

    const handleDelete = (recipeId, userId) => {
        props.deleteRecipe(recipeId, userId)
    }

    return (
        <div key={props.recipe.id} className='recipe-card'>
            <h3 className='recipe-name'>{props.recipe.recipeName}</h3>
            <i className='card-delete' onClick={() => {handleDelete(props.recipe.id, props.recipe.userId)}}>X</i>
            <p className='description'>{props.recipe.description}</p>
            <p className='recipe-info'>{props.recipe.prepTime}</p>
            <p className='recipe-info'>{props.recipe.cookTime}</p>
            <p className='recipe-info'>{props.recipe.yields}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };
  
  export default connect(mapStateToProps, { deleteRecipe })(RecipeCard);
