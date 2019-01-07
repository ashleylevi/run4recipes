import { errorReducer } from './errorReducer';
import * as actions from '../actions/index';

describe('errorReducer', () => {
  it('should return the default state', () => {
    const expected = false
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the sate with true if loading', () => {
    const initialState = false
    const expected = true
    const result = errorReducer(initialState, actions.isError(true))
    expect(result).toEqual(expected)
  })
  it('should return the sate with false if not loading', () => {
    const initialState = false
    const expected = false
    const result = errorReducer(initialState, actions.isError(false))
    expect(result).toEqual(expected)
  })
})