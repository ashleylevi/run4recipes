import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer'
import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
  allRecipes: recipesReducer,
  loading: loadingReducer
})

export default rootReducer