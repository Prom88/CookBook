import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from './slice/favorites.slice'

const reducers = combineReducers({favorites: reducer,})

export const store = configureStore({
  reducer: reducers,
})