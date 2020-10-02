import React, { useState, useEffect } from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeCard from './RecipeCard';
import { RaisedButton } from 'material-ui';
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
    }, [props.userData]);

    console.log(props.userData)

    return (
        <div className='dashboard'>
            <h3 className='user-id'>id: {props.userData.id}</h3>
            <h3 className='username'>User: {props.userData.username}</h3>
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
