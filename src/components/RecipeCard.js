import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
import { connect } from 'react-redux';
import UpdateRecipeForm from './UpdateRecipeForm';
import foodPic from '../assets/food_pic.jpg'

const RecipeCard = (props) => {

    const [isUpdating, setIsUpdating] = useState(false)
    const [recipeToUpdate, setRecipeToUpdate] = useState()

    const toggleIsUpdating = (recipeId) => {
        if(isUpdating === false) {
            setRecipeToUpdate(recipeId)
            setIsUpdating(true)
        } else {
            setRecipeToUpdate(0)
            isUpdating(false)
        }
        console.log('recipeId: ', recipeToUpdate)
    };

    const handleDelete = (recipeId, userId) => {
        props.deleteRecipe(recipeId, userId)
    };

    const handleCardData = (userId, recipeId) => {
        props.getRecipeData(userId, recipeId)
    };


    return (
        <div key={props.recipe.id} className={recipeToUpdate === props.recipe.id === true ? 'updating-card' : 'recipe-card'}>
            {isUpdating
            ? <UpdateRecipeForm isUpdating={isUpdating} setIsUpdating={setIsUpdating} recipe={props.recipe}/>
            : <>
                <div className='header-container'>
                    <Link className='name-link' onClick={() => {handleCardData(props.userData.id, props.recipe.id)}}  to='/selected'>
                        <div className='recipe-name-container'>
                            <h3 className='recipe-name'>{props.recipe.recipeName}</h3>
                        </div>
                    </Link>
                    <div className='card-actions-container'>
                        <i className='card-toggle fas fa-edit' onClick={() => {toggleIsUpdating(props.recipe.id)}}></i>
                        <i className='card-delete fas fa-times' onClick={() => {handleDelete(props.recipe.id, props.recipe.userId)}}></i>
                    </div>
                </div>

                <Link onClick={() => {handleCardData(props.userData.id, props.recipe.id)}}  to='/selected'>
                    <div>
                        <img className='recipe-image' src={props.recipe.imageURL || foodPic} alt="food"/>
                    </div>
                </Link>

                <p className='description'>{props.recipe.description}</p>
                <div className='recipe-details-container'>
                    <p className='recipe-info'>Prep Time: <span>{props.recipe.prepTime}</span></p>
                    <p className='recipe-info'>Cooking Time: <span>{props.recipe.cookTime}</span></p>
                    <p className='recipe-info'>Yields: <span>{props.recipe.yields}</span></p>
                </div>
             </>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };
  
export default connect(mapStateToProps, { updateRecipe, deleteRecipe, getRecipeData })(RecipeCard);
