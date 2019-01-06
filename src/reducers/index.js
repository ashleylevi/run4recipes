import { combineReducers } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';

const rootReducer = combineReducers({
  pastaRecipes: pastaReducer,
  potatoRecipes: potatoReducer,
  breadRecipes: breadReducer
})

export default rootReducer