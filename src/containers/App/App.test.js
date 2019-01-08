import { mapStateToProps } from './App'
import { shallow } from 'enzyme'
import App from './App'
import React from 'react'

describe('App', () => {
  describe('App component', () => {
    const mockRecipes  = [{
          label: "Spaghetti and meatballs",
          image: "https://image.png",
          ingredientLines: [],
          category: 'bread'
    }]
    it('Should match the snapshot', () => {
      const wrapper = shallow(<App pastaRecipes={mockRecipes} potatoRecipes={mockRecipes} breadRecipes={mockRecipes} />)
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

