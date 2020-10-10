import React, { useState } from 'react'
import { TextField, RaisedButton } from 'material-ui';
import { postRecipe } from '../actions/recipesActions';
import { connect } from 'react-redux';

const AddRecipeForm = (props) => {
    
    const [newRecipe, setNewRecipe] = useState({
        recipeName: '',
        description: '',
        prepTime: '',
        cookTime: '',
        yields: '',
    });
    const [message, setMessage] = useState('')

    const handleChanges = e => {
        e.preventDefault()
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
    };

    const handleRecipeImage = e => {
        setNewRecipe({
            ...newRecipe,
            recipeImage: e.target.value
        })
    }
    
      const handleSubmit = e => {
        e.preventDefault()
    
        if(!newRecipe.recipeName) {
            setMessage('Please provide required fields before submitting')
            return
        }
    
        console.log('newRecipe submit: ', newRecipe)
        props.postRecipe(newRecipe, props.userData.id)
        setNewRecipe({
          recipeName: '',
          description: '',
          prepTime: '',
          cookTime: '',
          recipeImage: ''
        })
        props.setIsCreatingRecipe(false)
      };

    // console.log('newRecipe: ', newRecipe)

    return (
        <div className='form-container'>
            <form className='add-recipe-form' onSubmit={handleSubmit}>
                <h3 className='form-title'>New Recipe</h3>

                <label className='field-container' htmlFor="recipeName">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    id='recipeName'
                    name='recipeName'
                    value={newRecipe.recipeName}
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
                    value={newRecipe.description}
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
                    value={newRecipe.prepTime}
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
                    value={newRecipe.cookTime}
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
                    value={newRecipe.yields}
                    placeholder='Yields'
                    floatingLabelText='Yields'
                    />
                </label>

                <label className='field-container' htmlFor="recipeImage">
                    <input
                    className='input-field'
                    type="file"
                    onChange={handleRecipeImage}
                    id='recipeImage'
                    name='recipeImage'
                    value={newRecipe.recipeImage}
                    />
                </label>
                <div className='button-container'>
                    <RaisedButton className='button-submit' type='submit'>Submit</RaisedButton>
                </div>
            </form>

            <p>{message ? message : null}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
    }
  };
  
  export default connect(mapStateToProps, { postRecipe })(AddRecipeForm);
