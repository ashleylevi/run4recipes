import React, { Component } from 'react';
import { fetchPastaRecipes } from '../../utils/apiCalls';
import { loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import { connect } from 'react-redux';
import './RecipesContainer.css'

class RecipesContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
  //  const recipes = await fetchPastaRecipes()
  //  this.props.loadPastaRecipes(recipes)
  }

  render() {
    return (
      <div className="recipes-container">
        <div className="header">
        <h1 className="title">run4recipes</h1>
        <h2 className="slogan">HIGH CARB MEAL IDEAS <img src='./images/runner.png' alt="runner" className='main-logo'></img> TO FUEL ANY RUN</h2>
      </div>
      </div>
    )
  }
}

// export const mapDispatchToProps = (dispatch) => ({
//   loadPastaRecipes: (recipes) => dispatch(loadPastaRecipes(recipes)),
//   loadPotatoRecipes: (recipes) => dispatch(loadPotatoRecipes(recipes)),
//   loadBreadRecipes: (recipes) => dispatch(loadBreadRecipes(recipes))
// })

// export default connect(null, mapDispatchToProps)(RecipesContainer)
export default RecipesContainer