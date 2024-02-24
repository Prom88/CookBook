import Axios from "axios"


const RecipeService = {
    async getAll() {
        let response = await Axios.get(
        'https://api.edamam.com/api/recipes/v2?type=public&app_id=184a956a&app_key=53d2d01023a395570577f77ddea24d82&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets')

        return response.data.hits
    },

    async getById(id) {
        let response = await Axios.get(
        'https://api.edamam.com/api/recipes/v2?type=public&app_id=184a956a&app_key=53d2d01023a395570577f77ddea24d82&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets')

        return response.data.hits.find(recipe => recipe.recipe.label == id)
    },
}

export default RecipeService