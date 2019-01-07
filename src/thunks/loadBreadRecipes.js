import { loadBreadRecipes } from '../actions/index';
import { loading } from '../actions/index';
import { key } from '../apikey';

export const fetchBreadThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=bread&app_id=0f8e1af8&app_key=${key}`)
      const recipes = await response.json()
      dispatch(loadBreadRecipes(recipes.hits)) 
      dispatch(loading(false))
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}