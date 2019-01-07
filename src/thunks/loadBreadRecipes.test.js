import { fetchBreadThunk } from './loadBreadRecipes';
import { loading, loadBreadRecipes, isError } from '../actions/index';
import { key } from '../apikey';


describe('fetchBreadThunk', () => {
  let mockUrl
  let mockDispatch
  
  beforeEach(() => {
    mockUrl = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=bread&app_id=0f8e1af8&app_key=${key}`
    mockDispatch = jest.fn()
  })

  it('should dispatch loadBreadRecipes with the correct param', async () => {
    const mockRecipes = [
    { 
      name: "Spaghetti and meatballs",
      image: "https://image.png",
      ingredients: [],
      category: 'bread',
      hits: []
    }]
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        breadRecipes: mockRecipes
      })
    }))
    
    const thunk = fetchBreadThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(loading(false))
    expect(mockDispatch).toHaveBeenCalledWith(loadBreadRecipes(mockRecipes.hits))
    expect(mockDispatch).toHaveBeenCalledWith(loading(true))
  })

  it('should return an error message', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    const thunk = fetchBreadThunk()
    const result = await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isError(true))
  })
})
