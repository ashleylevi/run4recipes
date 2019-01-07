export const loadPastaRecipes = (recipes) => ({
  type: 'LOAD_PASTA_RECIPES',
  recipes
})

export const loadPotatoRecipes = (recipes) => ({
  type: 'LOAD_POTATO_RECIPES',
  recipes
})

export const loadBreadRecipes = (recipes) => ({
  type: 'LOAD_BREAD_RECIPES',
  recipes
})

export const loading = (bool) => ({
  type: 'LOADING',
  bool
})

export const searchRecipes = (searchValue) => ({
  type: 'SEARCH_RECIPES',
  searchValue
})

export const isError = (bool) => ({
  type: 'IS_ERROR',
  bool
})


