import React, { useState, useEffect } from 'react';
import { RaisedButton } from 'material-ui';
import AddIngredientForm from '../components/AddIngredientForm'
import AddStepForm from '../components/AddStepForm'
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import foodPic from '../assets/food_pic.jpg'

const CurrentRecipe = (props) => {

    const [isAddingIngredient, setIsAddingIngredient] = useState(false)
    const [isAddingStep, setIsAddingStep] = useState(false)

    const toggleDataForm = (type) => {
        if(type === 'ingredient') {
            setIsAddingStep(false)
            setIsAddingIngredient(!isAddingIngredient)
        }
        if(type === 'step') {
            setIsAddingIngredient(false)
            setIsAddingStep(!isAddingStep)
        }
    };

    useEffect(() => {
        
    }, [props.recipeData])

    return (
        <div className='current-recipe-container'>
            <div className='header-container'>
                <h3 className='recipe-name'>{props.recipeData.recipe.recipeName}</h3>
                <div className='actions-container'>
                    <Link to='/dashboard'><i className='exit-icon fas fa-times'></i></Link>
                </div>
            </div>

            <div className='details-container'>
                <p className='description'>{props.recipeData.recipe.description}</p>
                <div className='recipe-info-container'>
                    <p className='recipe-info'>Prep Time: {props.recipeData.recipe.prepTime}</p>
                    <p className='recipe-info'>Cooking Time: {props.recipeData.recipe.cookTime}</p>
                    <p className='recipe-info'>Yields: {props.recipeData.recipe.yields}</p>
                </div>

                {/* form to add an ingredient to recipe */}
                <div className='recipe-ingredients-container'>
                    <p>Ingredients:</p>
                    {props.recipeData.ingredients.map(ingredient => (
                        <div key={ingredient.ingredientId}>
                            <p>{ingredient.ingredientName} - {ingredient.amount}</p>
                        </div>
                    ))}
                    <div className='button-container'>
                        <RaisedButton className='ingredient-button'  onClick={() => {toggleDataForm('ingredient')}}>
                            {isAddingIngredient
                            ? 'Cancel'
                            : <i className="fas fa-plus"> Ingredient</i>
                            }
                        </RaisedButton>
                    </div>
                    {isAddingIngredient && <AddIngredientForm />}
                </div>
                
                {/* form to add a step to recipe */}
                <div className='recipe-steps-container'>
                    <p>Steps:</p>
                    {props.recipeData.steps.map(step => (
                        <div key={step.id}>
                            <p>{step.stepNum}. {step.stepInstruction}</p>
                        </div>
                    ))}
                    <div className='button-container'>
                        <RaisedButton className='step-button'  onClick={() => {toggleDataForm('step')}}>
                            {isAddingStep
                            ? 'Cancel'
                            : <i className="fas fa-plus"> Step</i>
                            }
                        </RaisedButton>
                    </div>
                    {isAddingStep && <AddStepForm />}
                </div>

            </div>

            <div className='image-container'>
                <img className='recipe-image' 
                src={props.recipeData.recipe.imageURL || foodPic}
                alt={props.recipeData.recipe.recipeName || 'image of bunch of food'}
                />
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
