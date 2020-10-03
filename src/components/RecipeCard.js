import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
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
    const handleCardData = (userId, recipeId) => {
        props.getRecipeData(userId, recipeId)
    }


    return (
        <div key={props.recipe.id} className='recipe-card'>
            <Link onClick={() => {handleCardData(props.userData.id, props.recipe.id)}}  to='/selected'>
                <h3 className='recipe-name'>{props.recipe.recipeName}</h3>
            </Link>
            <div className='card-actions-container'>
                <i className='card-toggle fas fa-edit' onClick={toggleIsUpdating}></i>
                <i className='card-delete fas fa-times' onClick={() => {handleDelete(props.recipe.id, props.recipe.userId)}}></i>
            </div>
            <p className='description'>{props.recipe.description}</p>
            <div className='recipe-info-container'>
                <p className='recipe-info'>Prep Time: <span>{props.recipe.prepTime}</span></p>
                <p className='recipe-info'>Cooking Time: <span>{props.recipe.cookTime}</span></p>
                <p className='recipe-info'>Yields: <span>{props.recipe.yields}</span></p>
            </div>
            {isUpdating && <UpdateRecipeForm isUpdating={isUpdating} setIsUpdating={setIsUpdating} recipe={props.recipe} />}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };
  
export default connect(mapStateToProps, { updateRecipe, deleteRecipe, getRecipeData })(RecipeCard);
