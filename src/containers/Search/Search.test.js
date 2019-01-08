import { mapDispatchToProps } from './Search';
import Search from './Search';
import React from 'react';
import { shallow } from 'enzyme';

describe('Search Component', () => {
  let wrapper;
  let searchRecipesMock;
  
  beforeEach(() => {
    searchRecipesMock = jest.fn()
    wrapper = shallow(<Search searchRecipes={searchRecipesMock} />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot when there is a searchValue', () => {
    wrapper.setState({searchValue: 'kimchi'})
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
  

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with a searchRecipes action', () => {
      const searchRecipes = jest.fn()
      const mockDispatch = jest.fn()
      const actionToDispatch = searchRecipes('')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.searchRecipes('')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
  
}) 