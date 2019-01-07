import { fetchPastaThunk } from './loadPastaRecipes';
import { loadPastaRecipes, isError } from '../actions/index';
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
      category: 'pasta',
      hits: []
    }]
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        pastaRecipes: mockRecipes
      })
    }))
    
    const thunk = fetchPastaThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(loadPastaRecipes(mockRecipes.hits))
  })

  it('should return an error message', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    const thunk = fetchPastaThunk()
    const result = await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isError(true))
  })
})
