import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer'
import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
  pastaRecipes: recipesReducer,
  potatoRecipes: recipesReducer,
  breadRecipes: recipesReducer,
  loading: loadingReducer
})

export default rootReducer