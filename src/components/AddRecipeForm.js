import React, { useState } from 'react'
import { TextField, RaisedButton } from 'material-ui';
import { postRecipe, putRecipeImage } from '../actions/recipesActions';
import { connect } from 'react-redux';

const AddRecipeForm = (props) => {
    
    const [newRecipe, setNewRecipe] = useState({
        recipeName: '',
        description: '',
        prepTime: '',
        cookTime: '',
        yields: '',
    });
    const [imageFile, setImageFile] = useState('')
    const [imageFileName, setImageFileName] = useState('choose file')
    const [message, setMessage] = useState('')

    const handleChanges = e => {
        e.preventDefault()
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
    };

    const handleImageChange = e => {
        setImageFile(e.target.files[0])
        setImageFileName(e.target.files[0].name)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("image", imageFile);

        if(!newRecipe.recipeName) {
            setMessage('Please provide required fields before submitting')
            return
        }

        props.postRecipe(newRecipe, props.userData.id, formData)
        setNewRecipe({
          recipeName: '',
          description: '',
          prepTime: '',
          cookTime: '',
        })
        props.setIsCreatingRecipe(false)
        setImageFile('')
    };

    return (
        <div className='form-container'>
            <form className='add-recipe-form' onSubmit={handleSubmit}>
                <h3 className='form-title'>New Recipe</h3>

                <label className='field-container-image' htmlFor="imageFile">
                    <input
                    className='input-field-image'
                    type='file'
                    onChange={handleImageChange}
                    name='imageFile'
                    />
                </label>

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
                    fullWidth='true'
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
                    fullWidth='true'
                    />
                </label>

                <label className='field-container' htmlFor="Preptime">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    name='prepTime'
                    value={newRecipe.prepTime}
                    placeholder='Prep Time'
                    floatingLabelText='Prep Time'
                    fullWidth='true'
                    />
                </label>

                <label className='field-container' htmlFor="cookTime">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    name='cookTime'
                    value={newRecipe.cookTime}
                    placeholder='Cook Time'
                    floatingLabelText='Cook Time'
                    fullWidth='true'
                    />
                </label>

                <label className='field-container' htmlFor="yields">
                    <TextField
                    className='input-field'
                    type="text"
                    onChange={handleChanges}
                    name='yields'
                    value={newRecipe.yields}
                    placeholder='Yields'
                    floatingLabelText='Yields'
                    fullWidth='true'
                    />
                </label>

                <div className='button-container-add-recipe'>
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
  
  export default connect(mapStateToProps, { postRecipe, putRecipeImage })(AddRecipeForm);
