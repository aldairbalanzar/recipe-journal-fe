import React, { useState } from 'react';
import { postStep } from '../actions/currentRecipeActions';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';

const AddStepForm = (props) => {

    const [newStep, setNewStep] = useState({
        recipeId: props.recipeData.recipe.id,
        stepNum: '',
        stepInstruction: ''
    });

    const handleChanges = e => {
        e.preventDefault()
        setNewStep({
            ...newStep,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.postStep(newStep, props.userData.id, props.recipeData.recipe.id)
    };

    return (
        <div className='form-container'>
            <p>Step Form</p>
            <form onSubmit={handleSubmit}>
                <label className='field-container'>
                    <TextField
                    className='input-field'
                    type='text'
                    onChange={handleChanges}
                    id='stepNum'
                    name='stepNum'
                    value={newStep.stepNum}
                    placeholder='Step Number'
                    floatingLabelFixed='Step Number'
                    />
                </label>

                <label className='field-container'>
                    <TextField
                    className='input-field'
                    type='text'
                    onChange={handleChanges}
                    id='stepInstruction'
                    name='stepInstruction'
                    value={newStep.stepInstruction}
                    placeholder='Instruction'
                    floatingLabelFixed='Instruction'
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

export default connect(mapStateToProps, { postStep })(AddStepForm);
