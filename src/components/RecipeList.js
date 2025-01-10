import React from "react"
import '../App.css'

const RecipeList = ({recipes, onSelect })=>{
    return (
        <div>
            <h2>Recetas</h2>
            <ul>
                { recipes.map((recipe) =>(
                    <li key = {recipe._id} onClick = { ()=>onSelect( recipe ) } > {recipe.name }  </li>
                ))}
            </ul>
        </div>
    )
}
export default RecipeList