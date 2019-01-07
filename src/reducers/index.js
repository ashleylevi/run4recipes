import { combineReducers } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  pastaRecipes: pastaReducer,
  potatoRecipes: potatoReducer,
  breadRecipes: breadReducer,
  isLoading: loadingReducer
})

export default rootReducer