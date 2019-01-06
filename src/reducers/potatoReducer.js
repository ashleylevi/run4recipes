export const potatoReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POTATO_RECIPES':
      const cleanPotatoRecipes = action.recipes.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredientLines,
          category: 'potato'
        }
      })
      return [...state, ...cleanPotatoRecipes]
    default:
      return state
  }
}