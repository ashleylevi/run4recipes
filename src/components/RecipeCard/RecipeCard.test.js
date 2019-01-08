import React from 'react';
import { shallow } from 'enzyme';
import { RecipeCard } from './RecipeCard';

describe('RecipeCard', () => {
  let wrapper;
  let mockRecipe;

  beforeEach(() => {
    mockRecipe  = {
      label: "Spaghetti and meatballs",
      image: "https://image.png",
      ingredientLines: [],
      category: 'bread'
    }
    wrapper = shallow(<RecipeCard recipe={mockRecipe} />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});