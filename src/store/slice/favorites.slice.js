import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,

    reducers: {
        toggleFavorites: (state, action) => {
            const recipe = action.payload
            const isFav = state.some(r => r.label === recipe.label)
            if (isFav) {
                const index = state.findIndex(i => i.label == recipe.label)
                console.log(index)
                if (index !== -1){
                    state.splice(index, 1)
                }
            } else {
            state.push(recipe)
            }
        }
    }
})

export const {actions, reducer} = favoritesSlice