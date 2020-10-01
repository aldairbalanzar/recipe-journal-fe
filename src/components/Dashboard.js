import React, { useState, useEffect } from 'react';
import AddRecipeForm from './AddRecipeForm';
import { TextField, RaisedButton } from 'material-ui';
import { getRecipes } from '../actions/recipesActions';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);

    const toggleCreateRecipeForm = () => {
        setIsCreatingRecipe(!isCreatingRecipe)
    };

    useEffect(() => {
        console.log('useEffect')
        props.getRecipes(props.userData.id)
    }, []);

    return (
        <div className='dashboard'>
            <h3 className='user-id'>id: {props.userData.id}</h3>
            <h3 className='username'>User: {props.userData.username}</h3>
            <div className='recipe-list'>
                {props.recipesData.recipes.map(recipe => (
                    <div key={recipe.id} className='recipe-card'>
                        <h3 className='recipe-name'>{recipe.recipeName}</h3>
                        <p className='description'>{recipe.description}</p>
                        <p className='recipe-info'>{recipe.prepTime}</p>
                        <p className='recipe-info'>{recipe.cookTime}</p>
                        <p className='recipe-info'>{recipe.yields}</p>
                    </div>
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
