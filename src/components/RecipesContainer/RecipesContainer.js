import React, { Component } from 'react';
import { fetchPastaRecipes, fetchPotatoRecipes, fetchBreadRecipes } from '../../utils/apiCalls';
import { loadAllRecipes, loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import { connect } from 'react-redux';
import './RecipesContainer.css'

class RecipesContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
      const pastaRecipes = await fetchPastaRecipes()
      const potatoRecipes = await fetchPotatoRecipes()
      const breadRecipes = await fetchBreadRecipes()
      this.props.loadAllRecipes(pastaRecipes, potatoRecipes, breadRecipes)    
  }

  render() {
    return (
      <div className="recipes-container">

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allRecipes: state.allRecipes
})

export const mapDispatchToProps = (dispatch) => ({
  loadAllRecipes: (recipes1, recipes2, recipes3) => dispatch(loadAllRecipes(recipes1, recipes2, recipes3))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)