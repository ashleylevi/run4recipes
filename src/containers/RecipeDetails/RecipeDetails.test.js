import { mapStateToProps } from './RecipeDetails';
import { shallow } from 'enzyme';
import { RecipeDetails } from './RecipeDetails';
import React from 'react';

describe('RecipeDetails', () => {
  describe('RecipeDetails component', () => {
    const mockPastaRecipes  = [{
      name: "Spaghetti and meatballs",
      image: "https://image.png",
      ingredients: ['spaghetti', 'meatballs'],
      category: 'pasta'
    },
      {
        name: "kimchi",
        image: "https://image.png",
        ingredients: ['spaghetti', 'meatballs'],
        category: 'pasta'
    }]
    
    const mockPotatoRecipes = [{
      name: "mashed potatoes",
      image: "https://image.png",
      ingredients: ['spaghetti', 'meatballs'],
      category: 'potato'
    },
      {
        name: "baked potato",
        image: "https://image.png",
        ingredients: ['spaghetti', 'meatballs'],
        category: 'potato'
    }]

    const mockBreadRecipes = [{
      name: "bread1",
      image: "https://image.png",
      ingredients: ['spaghetti', 'meatballs'],
      category: 'bread'
    },
      {
        name: "bread2",
        image: "https://image.png",
        ingredients: ['spaghetti', 'meatballs'],
        category: 'bread'
    }]
  
    it('Should match the snapshot for pasta', () => {
      const mockPastaPath = {
        path: 'pasta',
        params: {
          name: 'kimchi'
        }
      }
      const wrapper = shallow(<RecipeDetails pastaRecipes={mockPastaRecipes} potatoRecipes={mockPotatoRecipes} breadRecipes={mockBreadRecipes} match={mockPastaPath} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('Should match the snapshot for potato', () => {
      const mockPotatoPath = {
        path: 'potato',
        params: {
          name: 'baked potato'
        }
      }
      const wrapper = shallow(<RecipeDetails pastaRecipes={mockPastaRecipes} potatoRecipes={mockPotatoRecipes} breadRecipes={mockBreadRecipes} match={mockPotatoPath} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('Should match the snapshot for bread', () => {
      const mockBreadPath = {
        path: 'bread',
        params: {
          name: 'bread1'
        }
      }
      const wrapper = shallow(<RecipeDetails pastaRecipes={mockPastaRecipes} potatoRecipes={mockPotatoRecipes} breadRecipes={mockBreadRecipes} match={mockBreadPath} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('Should match the snapshot for redirect', () => {
      const mockRedirectPath = {
        path: 'sfndk',
        params: {
          name: 'bk'
        }
      }
      const wrapper = shallow(<RecipeDetails pastaRecipes={[]} potatoRecipes={mockPastaRecipes} breadRecipes={mockBreadRecipes} match={mockRedirectPath} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('Should match the snapshot for non-matching paths', () => {
      const mockRedirectPath = {
        path: 'sfndk',
        params: {
          name: 'bk'
        }
      }
      const wrapper = shallow(<RecipeDetails pastaRecipes={mockPastaRecipes} potatoRecipes={mockPastaRecipes} breadRecipes={mockBreadRecipes} match={mockRedirectPath} />)
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