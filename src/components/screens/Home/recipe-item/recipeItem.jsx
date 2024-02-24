import { Link } from "react-router-dom"
import styles from "./RecipeItem.module.css"

function RecipeItem ({recipe, itemId}) {
    // console.log(itemId)
    return (
        <div className={styles.item}>
        <img className={styles.img} src={recipe.image}/>
        <div className={styles.info}>
         <h2>{recipe.label}</h2>
         <p>Ингридиенты: {recipe.ingredientLines.join(', ')}</p>
        </div>
        <Link className={styles.button} to = {`/recipe/${itemId}`} >Смотреть рецепт</Link>
       </div>
    )
}

export default RecipeItem