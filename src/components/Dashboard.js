import React, { useState, useEffect } from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeCard from './RecipeCard';
import { TextField, RaisedButton } from 'material-ui';
import { getRecipes } from '../actions/recipesActions';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);
    const [search, setSearch] = useState('')

    const handleSearchChanges = e => {
        e.preventDefault()
        setSearch(e.target.value)
    };

    const handleSearchSubmit = e => {
        e.preventDefault()
        console.log(search)
    }

    const toggleCreateRecipeForm = () => {
        setIsCreatingRecipe(!isCreatingRecipe)
    };

    useEffect(() => {
        props.getRecipes(props.userData.id)
    }, [props.userData]);

    useEffect(() => {
        console.log('hey')
    }, [search])

    return (
        <div className='dashboard'>
            <div className='search-container'>
                <TextField 
                className='input-field'
                type='text'
                onChange={handleSearchChanges}
                id='stepNum'
                name='stepNum'
                value={search}
                placeholder='Search'
                floatingLabelText='Search'
                />
                <RaisedButton onClick={handleSearchSubmit}>Search</RaisedButton>
            </div>
            <div className='user-data-container'>
                <h3 className='user-id'>id: {props.userData.id}</h3>
                <h3 className='username'>User: {props.userData.username}</h3>
            </div>
            <div className='recipe-list'>
                {props.recipesData.recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            {isCreatingRecipe && <AddRecipeForm setIsCreatingRecipe={setIsCreatingRecipe}/>}
            <RaisedButton className='button-add-recipe' onClick={toggleCreateRecipeForm}>Create Recipe</RaisedButton>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipesData: state.recipesReducer
    }
  };
  
  export default connect(mapStateToProps, { getRecipes })(Dashboard);
