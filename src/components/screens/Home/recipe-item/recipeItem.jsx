import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
import styles from "./RecipeItem.module.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actions, favoritesSlice } from "../../../../store/slice/favorites.slice"

function RecipeItem ({recipe, itemId}) {
    const favorites = useSelector(state =>
        state.favorites)

    const dispatch = useDispatch()

        console.log(favorites)

    const isFav = favorites.some(r => r.label === recipe.label)


    return (
        <div className={styles.item}>

            <FaHeart className={styles.fav} onClick={() => 
            dispatch(actions.toggleFavorites(recipe))}
            style = {{
                color: isFav? 'red':'gray',
                scale: '150%',
                position: 'absolute',
                marginTop: '15px',
                marginLeft: '20px'
                
            }}/>

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