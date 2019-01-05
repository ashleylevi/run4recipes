import { loadPotatoRecipes } from '../actions/index';
import { key } from '../apikey';

export const fetchPotatoThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=potato&app_id=0f8e1af8&app_key=${key}`)
      const recipes = await response.json()
      dispatch(loadPotatoRecipes(recipes.hits))  
      // localStorage.setItem('potato', JSON.stringify(recipes.hits));     
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}