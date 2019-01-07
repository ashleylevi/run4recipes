import { fetchBreadThunk } from './loadBreadRecipes';
import { loading, loadBreadRecipes } from '../actions/index';
import { key } from '../apikey';


describe('fetchMovies', () => {
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
      category: 'bread'
    }]
    

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        breadRecipes: mockRecipes
      })
    }))
    
    const thunk = fetchBreadThunk()
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(loading(false))
    expect(mockDispatch).toHaveBeenCalledWith(loadBreadRecipes( {breadRecipes: mockRecipes}))
  })
})

//   it('should dispatch loading(true)', async () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       ok: true
//     }))
    
//     const thunk = fetchBreadThunk(mockUrl)
//     await thunk(mockDispatch)
//     expect(mockDispatch).toHaveBeenCalledWith(loading(true))
//   })

//   it('should dispatch loading(false) if the response is ok', async () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       ok: true
//     }))
    
//     const thunk = fetchMovies(mockUrl)
//     await thunk(mockDispatch)
//     expect(mockDispatch).toHaveBeenCalledWith(loading(true))
//   })

//   it('should return an error message', async () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       ok: false
//     }))
//     const thunk = fetchMovies(mockUrl)
//     const result = await thunk(mockDispatch)
//     expect(result).toEqual('Error: something went wrong')
//     expect(mockDispatch).toHaveBeenCalledWith(catchError(true))
//   })
// })
