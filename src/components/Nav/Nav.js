import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPastaRecipes, fetchPotatoRecipes, fetchBreadRecipes } from '../../utils/apiCalls';
import { loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import './Nav.css';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor() {
    super()
  }

  async fetchRecipes(category) {
    if (category === 'pasta') {
      const pastaRecipes = await fetchPastaRecipes()
      this.props.loadPastaRecipes(pastaRecipes)
    }
    if (category === 'potatoes') {
      const potatoRecipes = await fetchPotatoRecipes()
      this.props.loadPotatoRecipes(potatoRecipes)
    }
    if (category === 'bread') {
      const breadRecipes = await fetchBreadRecipes()
      this.props.loadBreadRecipes(breadRecipes)

    }


  }
  
  render() {
    return(
      <div className="nav-bar">
        <Link to={'/'}>
              <button className='all-btn' onClick={() => this.fetchRecipes()}>All Recipes</button>
        </Link>
        <Link to={'/pasta'}>
              <button className='pasta-btn' onClick={() => this.fetchRecipes('pasta')}>Pasta</button>
        </Link>
        <Link to={'/potatoes'}>
              <button className='potatoes-btn' onClick={() => this.fetchRecipes('potatoes')}>Potatoes</button>
        </Link>
        <Link to={'/bread'}>
              <button className='bread-btn' onClick={() => this.fetchRecipes('bread')}>Bread</button>
        </Link>

      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loadPastaRecipes: (recipes) => dispatch(loadPastaRecipes(recipes)),
  loadPotatoRecipes: (recipes) => dispatch(loadPotatoRecipes(recipes)),
  loadBreadRecipes: (recipes) => dispatch(loadBreadRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(Nav)