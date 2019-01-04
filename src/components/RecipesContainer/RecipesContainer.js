import React, { Component } from 'react';
import { getAllRecipes } from '../../utils/apiCalls';
import { loadRecipes } from '../../actions/index';
import { connect } from 'react-redux';

class RecipesContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
   const recipes = await getAllRecipes()
   this.props.loadRecipes(recipes)
  }

  render() {
    return (
      <div className="recipes-container"></div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loadRecipes: (recipes) => dispatch(loadRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(RecipesContainer)