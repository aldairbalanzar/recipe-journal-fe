import React, { useState, useEffect } from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeCard from './RecipeCard';
import { TextField, RaisedButton } from 'material-ui';
import { getRecipes } from '../actions/recipesActions';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState()

    const toggleCreateRecipeForm = () => {
        setIsCreatingRecipe(!isCreatingRecipe)
    };

    const handleSearchChanges = e => {
        e.preventDefault()
        setSearch(e.target.value)
        setFiltered(props.recipesData.recipes.filter(recipe => {
            return recipe.recipeName.toLowerCase().includes(search.toLowerCase())
        }))
    };

    useEffect(() => {
        props.getRecipes(props.userData.id)
    }, []);
    
    return (
        <div className='dashboard'>
            <div className='dashboard-actions-container'>
                <div className='button-container'>
                    <RaisedButton className='button-add-recipe' onClick={toggleCreateRecipeForm}>
                        {isCreatingRecipe ? 'Cancel' : 'Create Recipe'}
                    </RaisedButton>
                </div>
                <TextField className='search-field' name='search' onChange={handleSearchChanges} placeholder='Search' />
                {isCreatingRecipe && <AddRecipeForm setIsCreatingRecipe={setIsCreatingRecipe}/>}
            </div>
            <div className='recipe-list'>
                {search.length > 0
                    ? filtered.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
                    : props.recipesData.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
                }
            </div>
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
