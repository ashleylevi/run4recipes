import React from 'react';
import { shallow } from 'enzyme';
import { RecipeCard } from './RecipeCard';
import { isRegExp } from 'util';

describe('RecipeCard', () => {
  let wrapper;
  let mockRecipe;

  beforeAll(() => {
    mockRecipe  = {
      name: "Spaghetti and meatballs",
      image: "https://image.png",
      ingredients: ['spaghetti', 'meatballs'],
      category: 'spaghetti'
    }
    wrapper = shallow(<RecipeCard recipe={mockRecipe} updateFavorites={jest.fn()} />);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call toggleFavorite if its in local storage', () => {
      localStorage.setItem('faves', JSON.stringify([mockRecipe]))
      wrapper.instance().toggleFavorite = jest.fn()
      wrapper.instance().componentDidMount() 
      expect(wrapper.instance().toggleFavorite).toHaveBeenCalled()
    })
  })

  describe('handleClick', () => {
    it('should add item to local storage if not a favorite and there are already items in local storage', () => {
      localStorage.setItem('faves', JSON.stringify([]))
      wrapper.instance().handleClick()
      const result = JSON.parse(localStorage.getItem('faves'))
      expect(result).toEqual([mockRecipe])
    })
    it('should add item to local storage if it is not a favorite and there are no items in local storage', () => {
      localStorage.clear()
      const initialStorage = JSON.parse(localStorage.getItem('faves'))
      wrapper.instance().handleClick()
      const result = JSON.parse(localStorage.getItem('faves'))
      expect(initialStorage).toEqual(null)
      expect(result).toEqual([mockRecipe])
    })
    it('should remove an item in local storage if isFavorite is true', () => {
      wrapper.instance().setState({
        isFavorite: true
      })
      localStorage.clear()
      localStorage.setItem('faves', JSON.stringify([mockRecipe]))
      wrapper.instance().handleClick()
      const result = JSON.parse(localStorage.getItem('faves'))
      expect(result).toEqual([])
    })
  })

  describe('toggleFavorite', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<RecipeCard recipe={mockRecipe} updateFavorites={jest.fn()} />);
    })
    
    it('should toggle state of isFavorite to true if false', () => {
      console.log(wrapper.state())
      wrapper.instance().toggleFavorite()
      console.log(wrapper.state())
      const result = wrapper.state().isFavorite
      expect(result).toEqual(true)
    })
    it('should toggle state of isFavorite to false if true', () => {
      wrapper.instance().setState({
        isFavorite: true
      })
      console.log(wrapper.state())
      wrapper.instance().toggleFavorite()
      const result = wrapper.state().isFavorite
      expect(result).toEqual(false)
    })
  })

});