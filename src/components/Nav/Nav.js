import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPastaRecipes, fetchPotatoRecipes, fetchBreadRecipes } from '../../utils/apiCalls';
import { loadAllRecipes, loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import './Nav.css';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor() {
    super()
  }

  async fetchRecipes(category) {
    if (category === 'all') {
      const pastaRecipes = await fetchPastaRecipes()
      const potatoRecipes = await fetchPotatoRecipes()
      const breadRecipes = await fetchBreadRecipes()
      this.props.loadAllRecipes(pastaRecipes, potatoRecipes, breadRecipes)
    }
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
        <Link to={'/allRecipes'}>
              <button className='all-btn' onClick={() => this.fetchRecipes('all')}>All Recipes</button>
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
  loadAllRecipes: (recipes1, recipes2, recipes3) => dispatch(loadAllRecipes(recipes1, recipes2, recipes3)),
  loadPastaRecipes: (recipes) => dispatch(loadPastaRecipes(recipes)),
  loadPotatoRecipes: (recipes) => dispatch(loadPotatoRecipes(recipes)),
  loadBreadRecipes: (recipes) => dispatch(loadBreadRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(Nav)