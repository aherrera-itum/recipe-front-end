import React from 'react'

const RecipeDetail = ({ recipe }) => (
    <div>
        <h2>{recipe.name}</h2>
        <h3>Ingredientes</h3>
        <ul>
            {recipe.ingredients.map((ingredient, index)=>(
                <li key= { index } >{ ingredient }</li>
            ))}
        </ul>
    </div>
)

export default RecipeDetail