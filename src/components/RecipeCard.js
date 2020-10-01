import React from 'react'

const RecipeCard = ({recipe}) => {
    return (
        <div key={recipe.id} className='recipe-card'>
            <h3 className='recipe-name'>{recipe.recipeName}</h3>
            <i className='card-delete'>X</i>
            <p className='description'>{recipe.description}</p>
            <p className='recipe-info'>{recipe.prepTime}</p>
            <p className='recipe-info'>{recipe.cookTime}</p>
            <p className='recipe-info'>{recipe.yields}</p>
        </div>
    )
}

export default RecipeCard
