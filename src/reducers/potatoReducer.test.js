import * as actions from '../actions/index';
import { potatoReducer } from './potatoReducer';

describe('potatoReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = potatoReducer(undefined, {})
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
          category: 'potato'
        } 
    }
  ]
    const expected = [
        { 
          name: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredients: [],
          category: 'potato'
        } 
    ]
    const result = potatoReducer(initialState, actions.loadPotatoRecipes(recipes))
    expect(result).toEqual(expected)
  })
})