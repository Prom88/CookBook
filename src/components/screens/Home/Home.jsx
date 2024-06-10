import { useEffect, useMemo, useState } from 'react'
import styles from './Home.module.css'
import RecipeItem from './recipe-item/recipeItem.jsx'
import RecipeService from '../../../services/Recipe.services.js'
import { useSelector } from 'react-redux'

function Home() {
  const [ingr, setIngr] = useState('')
  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const data = await RecipeService.getAll()

      setRecipes(data)
      
    }

    fetchData()
  }, [])

  const getFilteredRecipes = () => {
    if (!ingr){
      return recipes
    }
    return recipes.filter(
      item => {
        const ingrFilt = (ingr.split(' ').filter(el => el != ''))//фильтр ingr от ""
  
        return item.recipe.ingredients.some(ingredient => ingrFilt.some(ingr => ingredient.food.includes(ingr))) 
        //возвращает если один из ingredients[food] содержит в себе один из ingr
        // пиздец тупая структура данных api
        // return item.recipe.ingredientLines.join(', ').includes(ingr)
      } 
    )
  }

  const filteredRecipes = getFilteredRecipes()
  //console.log(filteredRecipes)

  const favorites = useSelector(state =>
    state.favorites)


  if (!recipes) return <p>Loading...</p>

  let favs = favorites => {
    if (favorites.length) {
      return favorites.map((recipe) => (
        <RecipeItem key = {recipe.label} recipe = {recipe} itemId={recipe.label}/>
      ))
    } else return <p>No favorites</p>
  }


  return (
    <div>
        <h1>CookBook</h1>
        <input onChange={event =>setIngr(event.target.value)} value={ingr}/>
        <div className={styles.container}>

          <div className= {styles.fav}>
            {favs(favorites)}
          </div>

          {filteredRecipes.map((recipe) => ( 
            <RecipeItem key = {recipe.recipe.label} recipe = {recipe.recipe} itemId = {recipe.recipe.label}/>
          ))}
        </div> 
    </div>
  )
}

export default Home