import * as actions from '../actions/index';
import { breadReducer } from './breadReducer'

describe('breadReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = breadReducer(undefined, {})
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
          category: 'bread'
        } 
    }
  ]
    const expected = [
        { 
          name: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredients: [],
          category: 'bread'
        } 
    ]
    const result = breadReducer(initialState, actions.loadBreadRecipes(recipes))
    expect(result).toEqual(expected)
  })
})