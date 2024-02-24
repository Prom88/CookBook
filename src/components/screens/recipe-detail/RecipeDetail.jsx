import { Link, useParams } from 'react-router-dom'

import styles from './RecipeDetail.module.css'
import RecipeService from '../../../services/Recipe.services'
import { useEffect, useState } from 'react'

const RecipeDetail = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})

    
    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await RecipeService.getById(id)
    
          setRecipe(data.recipe)
          console.log(data.recipe)
        }
        fetchData()
      }, [id])
    
      const rec = recipe

      if (!recipe.ingredientLines) return <p>Loading...</p>

    return (
    <div>
      <div className={styles.container}>
        <h1>CookBook</h1>
        <Link className={styles.button} to='/CookBook'>Назад</Link>
      </div>
        <h2 className={styles.name}>{recipe.label}</h2>
        <img className={styles.img} src={recipe.image}/>
        <div className={styles.info}>
            <p>Ингрдиенты: {recipe.ingredientLines.join(', ')}.</p>
            <p><a href={recipe.url}>смотреть инструкцию</a></p>
         </div>
    </div>
    )
}

export default RecipeDetail