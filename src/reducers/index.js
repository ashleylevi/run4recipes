import { combineReducers } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';
import { loadingReducer } from './loadingReducer';
import { searchReducer } from './searchReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  pastaRecipes: pastaReducer,
  potatoRecipes: potatoReducer,
  breadRecipes: breadReducer,
  isLoading: loadingReducer,
  searchValue: searchReducer,
  isError: errorReducer
})

export default rootReducer