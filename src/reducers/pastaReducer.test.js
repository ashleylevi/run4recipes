import * as actions from '../actions/index';
import { pastaReducer } from './pastaReducer';

describe('pastaReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = pastaReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the state with recipes', () => {
    const initialState = []
    const recipes = [{
      recipe: 
        { 
          label: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredientLines: [],
          category: 'pasta'
        } 
    }
  ]
    const expected = [
        { 
          name: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredients: [],
          category: 'pasta'
        } 
    ]
    const result = pastaReducer(initialState, actions.loadPastaRecipes(recipes))
    expect(result).toEqual(expected)
  })
})