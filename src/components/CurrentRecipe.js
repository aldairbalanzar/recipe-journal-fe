import React, { useState, useEffect } from 'react';
import { RaisedButton } from 'material-ui';
import AddIngredientForm from '../components/AddIngredientForm'
import AddStepForm from '../components/AddStepForm'
import { updateRecipe, deleteRecipe } from '../actions/recipesActions';
import { getRecipeData } from '../actions/currentRecipeActions';
import { connect } from 'react-redux';

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

    console.log('recipeData: ', props.recipeData)

    return (
        <div>
            <h3 className='recipe-name'>{props.recipeData.recipe.recipeName}</h3>
            <p className='description'>{props.recipeData.recipe.description}</p>
            <div className='recipe-info-container'>
                <p className='recipe-info'>Prep Time: {props.recipeData.recipe.prepTime}</p>
                <p className='recipe-info'>Cooking Time: {props.recipeData.recipe.cookTime}</p>
                <p className='recipe-info'>Yields: {props.recipeData.recipe.yields}</p>
            </div>
            <div className='recipe-ingredients-container'>
                <p>Ingredients:</p>
                {props.recipeData.ingredients.map(ingredient => (
                    <div key={ingredient.id}>
                        <p>{ingredient.ingredientName}</p>
                        <p>{ingredient.amount}</p>
                    </div>
                ))}
                <RaisedButton onClick={() => {toggleDataForm('ingredient')}}>
                    {isAddingIngredient ? 'cancel' : 'Add Ingredient'}
                </RaisedButton>
                {isAddingIngredient && <AddIngredientForm />}
            </div>
            <div className='recipe-steps-container'>
                <p>Steps:</p>
                {props.recipeData.steps.map(step => (
                    <div key={step.id}>
                        <p>{step.stepNum}</p>
                        <p>{step.stepInstruction}</p>
                    </div>
                ))}
                <RaisedButton onClick={() => {toggleDataForm('step')}}>
                    {isAddingStep ? 'cancel' : 'Add Step'}
                </RaisedButton>
                {isAddingStep && <AddStepForm />}
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
