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
    const { loadAllRecipes, loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes, allRecipes, pastaRecipes, potatoRecipes, breadRecipes } = this.props;
    if (allRecipes.length === 0 && category === 'allRecipes') {
      const pastaRecipes = await fetchPastaRecipes()
      const potatoRecipes = await fetchPotatoRecipes()
      const breadRecipes = await fetchBreadRecipes()
      loadAllRecipes(pastaRecipes, potatoRecipes, breadRecipes)    
    }
    if (pastaRecipes.length === 0 && category === 'pasta') {
      const pastaRecipes = await fetchPastaRecipes()
      loadPastaRecipes(pastaRecipes)
    }
    if (potatoRecipes.length === 0 && category === 'potatoes') {
      const potatoRecipes = await fetchPotatoRecipes()
      loadPotatoRecipes(potatoRecipes)
    }
    if (breadRecipes.length === 0 &&category === 'bread') {
      const breadRecipes = await fetchBreadRecipes()
      loadBreadRecipes(breadRecipes)
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

export const mapStateToProps = (state) => ({
  allRecipes: state.allRecipes,
  pastaRecipes: state.pastaRecipes,
  potatoRecipes: state.potatoRecipes,
  breadRecipes: state.breadRecipes
})

export const mapDispatchToProps = (dispatch) => ({
  loadAllRecipes: (recipes1, recipes2, recipes3) => dispatch(loadAllRecipes(recipes1, recipes2, recipes3)),
  loadPastaRecipes: (recipes) => dispatch(loadPastaRecipes(recipes)),
  loadPotatoRecipes: (recipes) => dispatch(loadPotatoRecipes(recipes)),
  loadBreadRecipes: (recipes) => dispatch(loadBreadRecipes(recipes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)