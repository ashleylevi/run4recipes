import { mapDispatchToProps } from './Search';
import { Search } from './Search';
import React from 'react';
import { shallow } from 'enzyme';
import { searchRecipes } from '../../actions/index';

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

  it('should have a default state', () => {
    let wrapper = shallow(<Search searchRecipes={searchRecipesMock} />)
    const expected = {
      searchValue: ''
    }
    console.log(wrapper.state())
    expect(wrapper.instance().state).toEqual(expected)
  })

  describe('handleChange', () => {
    const mockEvent = {target: {value: 'kimchi'}}

    it('it should update searchValue in state', () => {
      const expected = 'kimchi'
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state().searchValue).toEqual(expected)
    })
  })
  

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a searchRecipes action', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = searchRecipes('kimchi')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.searchRecipes('kimchi')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
  
}) 