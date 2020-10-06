import React, { useState } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { updateRecipe } from '../actions/recipesActions';
import { connect } from 'react-redux';

const UpdateRecipeForm = (props) => {
    const [recipeUpdate, setRecipeUpdate] = useState({
        ...props.recipe
    });

    const handleChanges = e => {
        e.preventDefault()
        setRecipeUpdate({
        ...recipeUpdate,
        [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.updateRecipe(recipeUpdate, props.recipe.userId)
        props.setIsUpdating(!props.isUpdating)
    };

    return (
        <div className='form-container'>
            <form className='update-recipe-form' onSubmit={handleSubmit}>
                <h3 className='form-title'>Updating recipe...</h3>

                <label className='field-container' htmlFor="recipeName">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    id='recipeName'
                    name='recipeName'
                    value={recipeUpdate.recipeName}
                    placeholder='Recipe Name'
                    floatingLabelText='Recipe Name'
                    />
                </label>

                <label className='field-container' htmlFor="description">
                    <TextField
                    className='text-area'
                    type="text"
                    multiLine={true}
                    onChange={handleChanges}
                    id='description'
                    name='description'
                    value={recipeUpdate.description}
                    placeholder='Description'
                    floatingLabelText='Description'
                    />
                </label>

                <label className='field-container' htmlFor="Preptime">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    id='prepTime'
                    name='prepTime'
                    value={recipeUpdate.prepTime}
                    placeholder='Prep Time'
                    floatingLabelText='Prep Time'
                    />
                </label>

                <label className='field-container' htmlFor="cookTime">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    id='cookTime'
                    name='cookTime'
                    value={recipeUpdate.cookTime}
                    placeholder='Cook Time'
                    floatingLabelText='Cook Time'
                    />
                </label>

                <label className='field-container' htmlFor="yields">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    id='yields'
                    name='yields'
                    value={recipeUpdate.yields}
                    placeholder='Yields'
                    floatingLabelText='Yields'
                    />
                </label>
                <div className="actions-container">
                    <RaisedButton className='button-submit' type='submit'>Update</RaisedButton>
                    <RaisedButton className='button-cancel' onClick={() => {props.setIsUpdating(false)}}>Cancel</RaisedButton>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };

export default connect(mapStateToProps, { updateRecipe })(UpdateRecipeForm);
