import { loadPastaRecipes } from '../actions/index';

export const fetchPastaThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pasta&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
      const recipes = await response.json()
      dispatch(loadPastaRecipes(recipes.hits))     
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}