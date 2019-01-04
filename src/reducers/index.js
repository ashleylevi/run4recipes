import { combineReducers } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';
import { allRecipesReducer } from './allRecipesReducer';

const rootReducer = combineReducers({
  allRecipes: allRecipesReducer,
  pastaRecipes: pastaReducer,
  potatoRecipes: potatoReducer,
  breadRecipes: breadReducer
})

export default rootReducer