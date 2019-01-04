import { combineReducers } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';
import { loadingReducer } from './loadingReducer';
import { allRecipesReducer } from './allRecipesReducer';

const rootReducer = combineReducers({
  allRecipes: allRecipesReducer,
  pastaRecipes: pastaReducer,
  potatoRecipes: potatoReducer,
  breadRecipes: breadReducer,
  loading: loadingReducer
})

export default rootReducer