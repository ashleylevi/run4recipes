import * as actions from '../actions/index';

describe('actions', () => {
  it('should return a type of LOAD_PASTA_RECIPES with recipes', () => {
    const recipes = []
    const expected = {
      type: 'LOAD_PASTA_RECIPES',
      recipes
    }
    const result = actions.loadPastaRecipes(recipes)
    expect(result).toEqual(expected)
  })
  it('should return a type of LOAD_POTATO_RECIPES with recipes', () => {
    const recipes = []
    const expected = {
      type: 'LOAD_POTATO_RECIPES',
      recipes
    }
    const result = actions.loadPotatoRecipes(recipes)
    expect(result).toEqual(expected)
    
  })
  it('should return a type of LOAD_BREAD_RECIPES with recipes', () => {
    const recipes = []
    const expected = {
      type: 'LOAD_BREAD_RECIPES',
      recipes
    }
    const result = actions.loadBreadRecipes(recipes)
    expect(result).toEqual(expected)
  })
  it('should return a type of LOADING with a boolean', () => {
    const bool =  false
    const expected = {
      type: 'LOADING',
      bool
    }
    const result = actions.loading(bool)
    expect(result).toEqual(expected)
  })
  it('should return a type of SEARCH_RECIPES', () => {
    const searchValue = 'kimchi'
    const expected = {
      type: 'SEARCH_RECIPES',
      searchValue
    }
    const result = actions.searchRecipes(searchValue)
    expect(result).toEqual(expected)
  })
})