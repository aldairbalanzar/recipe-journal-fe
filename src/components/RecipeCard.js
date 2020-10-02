import React, { useState } from 'react'
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { connect } from 'react-redux';
import UpdateRecipeForm from './UpdateRecipeForm';

const RecipeCard = (props) => {

    const [isUpdating, setIsUpdating] = useState(false)
    const [message, setMessage] = useState('')

    const toggleIsUpdating = () => {
        setIsUpdating(!isUpdating)
    };
    const handleDelete = (recipeId, userId) => {
        props.deleteRecipe(recipeId, userId)
    };


    return (
        <div key={props.recipe.id} className='recipe-card'>
            <h3 className='recipe-name'>{props.recipe.recipeName}</h3>
            <i className='card-delete' onClick={() => {handleDelete(props.recipe.id, props.recipe.userId)}}>X</i>
            <i className='card-toggle' onClick={toggleIsUpdating}>Update</i>
            <p className='description'>{props.recipe.description}</p>
            <p className='recipe-info'>{props.recipe.prepTime}</p>
            <p className='recipe-info'>{props.recipe.cookTime}</p>
            <p className='recipe-info'>{props.recipe.yields}</p>
            {isUpdating && <UpdateRecipeForm isUpdating={isUpdating} setIsUpdating={setIsUpdating} recipe={props.recipe} />}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };
  
export default connect(mapStateToProps, { updateRecipe, deleteRecipe })(RecipeCard);
