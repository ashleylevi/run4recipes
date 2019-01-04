export const pastaReducer = (state = [], action) => {
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
    default:
      return state
  }
}