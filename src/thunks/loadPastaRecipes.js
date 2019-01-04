import { loadPastaRecipes } from '../actions/index';

export const fetchPastaThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pasta&app_id=0f8e1af8&app_key=a197606b8abb4aeb41aa9f761271a549')
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const recipes = await response.json()
      dispatch(loadPastaRecipes(recipes))     
    } catch(error) {
      // dispatch(catchError(error.message))
    }
  }
}