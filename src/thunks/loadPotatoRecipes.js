import { loadPotatoRecipes } from '../actions/index';

export const fetchPotatoThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=potato&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
      const recipes = await response.json()
      dispatch(loadPotatoRecipes(recipes.hits))     
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}