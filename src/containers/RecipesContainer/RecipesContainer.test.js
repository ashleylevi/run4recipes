import { mapStateToProps,
   mapDispatchToProps } from './RecipesContainer';
import RecipesContainer from './RecipesContainer';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../../thunks/loadPastaRecipes')
jest.mock('../../thunks/loadPotatoRecipes')
jest.mock('../../thunks/loadBreadRecipes')
jest.mock('react-uid', () => ({
  uid: jest.fn(() => 1)
}))

describe('RecipesContainer Component', () => {
  let wrapper;
  let mockRecipe;
 
  
  beforeEach(() => {
    wrapper = shallow(<RecipesContainer />)
  })
    mockRecipe = {
      name: "Spaghetti and meatballs",
      image: "https://image.png",
      ingredients: ['spaghetti', 'meatballs'],
      category: 'pasta'
    }
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot if favorites ', () => {
    const mockFavoritesPath = {
      path: 'favorites',
      params: {
        name: 'baked potato'
      }
    }
    localStorage.setItem('faves', JSON.stringify([mockRecipe]))
    const wrapper = shallow(<RecipesContainer recipe={mockRecipe} updateFavorites={jest.fn()} match={mockFavoritesPath}/>)
    expect(wrapper).toMatchSnapshot()
  })


  describe('mapStateToProps', () => {
    it('should create an object with everything in state', () => {
      const mockState = {
        pastaRecipes: [{}],
        potatoRecipes: [{}],
        breadRecipes: [{}],
        isLoading: false,
        searchValue: 'kimchi',
        isError: 'false'
      }

      const expected = {
        pastaRecipes: [{}],
        potatoRecipes: [{}],
        breadRecipes: [{}],
        isLoading: false,
        searchValue: 'kimchi',
        isError: 'false'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchPasta action', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPastaThunk()
      expect(mockDispatch).toHaveBeenCalledWith('pasta thunk')
    })
    it('calls dispatch with a fetchPotato action', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPotatoThunk()
      expect(mockDispatch).toHaveBeenCalledWith('potato thunk')
    })
    it('calls dispatch with a fetchBread action', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchBreadThunk()
      expect(mockDispatch).toHaveBeenCalledWith('bread thunk')
    })


   
    })
  })


  