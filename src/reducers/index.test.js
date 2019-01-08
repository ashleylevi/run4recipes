import rootReducer from './index';
import { createStore } from 'redux';
import { pastaReducer } from './pastaReducer';
import { potatoReducer } from './potatoReducer';
import { breadReducer } from './breadReducer';
import { searchReducer } from './searchReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should show initial state of pastaRecipes when pastaReducer handles an action', () => {
    expect(store.getState().pastaRecipes).toEqual(pastaReducer([], {}));
  });

  it('should show initial state of potatoRecipes when potatoReducer handles an action', () => {
    expect(store.getState().potatoRecipes).toEqual(potatoReducer([], {}));
  });

  it('should show initial state of breadRecipes when breadReducer handles an action', () => {
    expect(store.getState().breadRecipes).toEqual(breadReducer([], {}));
  });

  it('should show initial state of searchValue when searchReducer handles an action', () => {
    expect(store.getState().searchValue).toEqual(searchReducer('', {}));
  });

  it('should show initial state of isError when errorReducer handles an action', () => {
    expect(store.getState().isError).toEqual(errorReducer(false, {}));
  });

  it('should show initial state of isLoading when loadingReducer handles an action', () => {
    expect(store.getState().isLoading).toEqual(loadingReducer(false, {}));
  });
});