import { mapStateToProps,
   mapDispatchToProps } from './RecipesContainer';
import RecipesContainer from './RecipesContainer';
import React from 'react';
import { shallow } from 'enzyme';

describe('RecipesContainer Component', () => {
  let wrapper;
 
  
  beforeEach(() => {
    wrapper = shallow(<RecipesContainer />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


  describe('mapStateToProps', () => {
    it.skip('', () => {
     
    })
  })

  describe('mapDispatchToProps', () => {
    it.skip('', () => {
   
    })
  })


  
}) 