import Axios from "axios"


const RecipeService = {
    async getAll() {
        let response = await Axios.get(
        'https://api.edamam.com/api/recipes/v2?type=public&app_id=184a956a&app_key=53d2d01023a395570577f77ddea24d82&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=French&cuisineType=Italian')

        return response.data.hits
    },

    async getById(id) {
        let response = await Axios.get(
        'https://api.edamam.com/api/recipes/v2?type=public&app_id=184a956a&app_key=53d2d01023a395570577f77ddea24d82&cuisineType=American&cuisineType=Asian&cuisineType=British&cuisineType=French&cuisineType=Italian')

        return response.data.hits.find(recipe => recipe.recipe.label == id)
    },
}

export default RecipeService