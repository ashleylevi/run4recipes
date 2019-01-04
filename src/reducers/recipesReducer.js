export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PASTA_RECIPES':
      const cleanPastaRecipes = action.recipes.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredientLines
        }
      })
      return [...state, ...cleanPastaRecipes]
    case 'LOAD_POTATO_RECIPES':
      const cleanPotatoRecipes = action.recipes.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredientLines
        }
      })
      return [...state, ...cleanPotatoRecipes]
    case 'LOAD_BREAD_RECIPES':
      const cleanBreadRecipes = action.recipes.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredientLines
        }
      })
      return [...state, ...cleanBreadRecipes]
    default:
      return state
  }
}
