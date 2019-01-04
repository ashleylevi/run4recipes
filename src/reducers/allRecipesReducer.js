export const allRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ALL_RECIPES':
    const cleanPastaRecipes = action.recipes1.map((recipe) => {
      return {
        name: recipe.recipe.label,
        image: recipe.recipe.image,
        ingredients: recipe.recipe.ingredientLines
      }
    })
    const cleanPotatoRecipes = action.recipes2.map((recipe) => {
      return {
        name: recipe.recipe.label,
        image: recipe.recipe.image,
        ingredients: recipe.recipe.ingredientLines
      }
    })
    const cleanBreadRecipes = action.recipes3.map((recipe) => {
      return {
        name: recipe.recipe.label,
        image: recipe.recipe.image,
        ingredients: recipe.recipe.ingredientLines
      }
    })
    return [...state, ...cleanPastaRecipes, ...cleanPotatoRecipes, ...cleanBreadRecipes]
  default:
    return state
  }
}