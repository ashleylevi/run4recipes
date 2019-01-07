import { searchReducer } from './searchReducer';
import * as actions from '../actions/index';

describe('searchReducer', () => {
  it('should return the default state', () => {
    const expected = ''
    const result = searchReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the search value if searching', () => {
    const initialState = ''
    const expected = 'kimchi'
    const result = searchReducer(initialState, actions.searchRecipes('kimchi'))
    expect(result).toEqual(expected)
  })
})