import { loadBreadRecipes } from '../actions/index';

export const fetchBreadThunk = () => {
  return async (dispatch) => {
    try {
      // check local storage
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=bread&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
      const recipes = await response.json()
      dispatch(loadBreadRecipes(recipes.hits)) 
      // localStorage.setItem(bread, JSON.stringify(recipes));    
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}