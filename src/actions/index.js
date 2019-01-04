export const loadRecipes = (recipes) => ({
  type: 'LOAD_RECIPES',
  recipes
})

export const loading = (bool) => ({
  type: 'LOADING',
  bool
})