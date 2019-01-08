import { mapStateToProps } from './RecipeDetails';
import { shallow } from 'enzyme';
import { RecipeDetails } from './RecipeDetails';
import React from 'react';

describe('RecipeDetails', () => {
  describe('RecipeDetails component', () => {
    const mockRecipes  = [{
          label: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredientLines: [],
          category: 'bread'
    }]
    const mockPath = {
      path: ''
    }

    it('Should match the snapshot', () => {
      const wrapper = shallow(<RecipeDetails pastaRecipes={mockRecipes} potatoRecipes={mockRecipes} breadRecipes={mockRecipes} match={mockPath} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  
  describe('mapStateToProps', () => {
    it('should return an array with recipe objects', () => {
      const mockRecipes  = [{
        label: "Spaghetti and meatballs",
        image: "https://image.png",
        ingredientLines: [],
        category: 'bread'
      }]
    
      const mockState = {
        pastaRecipes: mockRecipes,
        potatoRecipes: mockRecipes,
        breadRecipes: mockRecipes
      }

      const expected = {
        pastaRecipes: mockRecipes,
        potatoRecipes: mockRecipes,
        breadRecipes: mockRecipes
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})