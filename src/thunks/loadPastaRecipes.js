import { loadPastaRecipes } from '../actions/index';
import { key } from '../apikey';

export const fetchPastaThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pasta&app_id=0f8e1af8&app_key=${key}`)
      const recipes = await response.json()
      dispatch(loadPastaRecipes(recipes.hits))     
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}