import React, {useEffect, useState} from 'react'
import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'

import './App.css'
import RecipeDetail from './components/RecipeDetail'



const API_URL = "http://localhost:5000/recipes"

const App = () => {
  const [recipe, setRecipe] = useState([])
  const [selectedRecipe, setselectedRecipe ] = useState(null)



  const fetchRecipes = async ()=>{
    try{
      const response = await fetch(API_URL)
      if (!response.ok){
          throw new Error("Error de comunicación con el API")
      }
      const data = await response.json()
      setRecipe(data)

    }
    catch(error){
      console.error('Error:', 'Error de Fetch')
    }
  }
  
  
  const saveRecipe = async (recipe) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(recipe)
    })
    fetchRecipes()
  }
  
  useEffect(()=>{
    fetchRecipes()
  },[])


  return (
    <div className='container'>
      <h1>Aplicación de Recetas</h1>
      <RecipeForm onSave= { saveRecipe }></RecipeForm>
      <RecipeList recipes={ recipe } onSelect ={ setselectedRecipe } />
      { selectedRecipe && <RecipeDetail recipe={ selectedRecipe }/>}
    </div>
  )
}
export default App