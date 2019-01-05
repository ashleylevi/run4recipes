import { fetchPastaThunk } from './loadPastaRecipes';
import { fetchPotatoThunk } from './loadPotatoRecipes';
import { fetchBreadThunk } from './loadBreadRecipes';

export const loadAllRecipesThunk = () => {
  return async (dispatch) => {
    fetchPastaThunk()(dispatch)
    fetchPotatoThunk()(dispatch)
    fetchBreadThunk()(dispatch)
  }
}