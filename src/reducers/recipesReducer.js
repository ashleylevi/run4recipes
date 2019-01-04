export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_RECIPES':
      const cleanRecipes = action.recipes.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredientLines
        }
      })
      return [...state, ...cleanRecipes]
    default:
      return state
  }
}