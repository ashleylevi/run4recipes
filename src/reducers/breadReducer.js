export const breadReducer = (state = [], action) => {
  switch (action.type) {
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