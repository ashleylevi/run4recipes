import { loadBreadRecipes } from '../actions/index';
import { key } from '../apikey'

export const fetchBreadThunk = () => {
  return async (dispatch) => {
    try {
      // check local storage
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=bread&app_id=0f8e1af8&app_key=${key}`)
      const recipes = await response.json()
      dispatch(loadBreadRecipes(recipes.hits)) 
    } catch(error) {
      console.log(error.message);
      return [];
    }
  }
}

// export const fetchBreadThunk = () => {
//   return async (dispatch) => {
//     try {
//       // check local storage
//       const storage = await localStorage.getItem('bread')
//       console.log(storage)
//       if(!storage){
//         const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=bread&app_id=0f8e1af8&app_key=${key}`)
//         const recipes = await response.json()
//         dispatch(loadBreadRecipes(recipes.hits))
//         console.log(recipes.hits) 
//         localStorage.setItem('bread', JSON.stringify(recipes.hits))
//       } else {
//         const recipeArray = storage.map( item => item.recipe)
//         dispatch(loadBreadRecipes(storage)) 
//       }
//     } catch(error) {
//       console.log(error.message);
//       return [];
//     }
//   }
// }