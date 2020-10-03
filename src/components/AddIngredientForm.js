import React, { useState } from 'react';
import { postIngredient } from '../actions/currentRecipeActions';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';

const AddIngredientForm = (props) => {

    const [newIngredient, setNewIngredient] = useState({
        recipeId: props.recipeData.recipe.id,
        ingredientName: '',
        amount: ''
    });

    const handleChanges = e => {
        e.preventDefault()
        setNewIngredient({
            ...newIngredient,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.postIngredient(newIngredient, props.userData.id, props.recipeData.recipe.id)
        setNewIngredient({
            ingredientName: '',
            amount: ''
        })
    };

    return (
        <div className='form-container'>
            <p>Ingredinet Form</p>
            <form onSubmit={handleSubmit}>
                <label className='field-container'>
                    <TextField
                    className='input-field'
                    type='text'
                    onChange={handleChanges}
                    id='ingredientName'
                    name='ingredientName'
                    value={newIngredient.ingredientName}
                    placeholder='Ingredient Name'
                    floatingLabelFixed='Ingredient Name'
                    />
                </label>

                <label className='field-container'>
                    <TextField
                    className='input-field'
                    type='text'
                    onChange={handleChanges}
                    id='amount'
                    name='amount'
                    value={newIngredient.amount}
                    placeholder='Amount'
                    floatingLabelFixed='Amount'
                    />
                </label>

                <RaisedButton type='submit'>Submit</RaisedButton>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipeData: state.currentRecipeReducer
    }
  };

export default connect(mapStateToProps, { postIngredient })(AddIngredientForm);
