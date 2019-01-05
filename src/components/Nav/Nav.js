import React from 'react';
import { Link } from 'react-router-dom';
import { loadAllRecipes, loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import './Nav.css';
import { connect } from 'react-redux';

const Nav = () => {
  return(
    <div className="nav-bar">
      <Link to={'/allRecipes'}>
            <button className='all-btn'>All Recipes</button>
      </Link>
      <Link to={'/pasta'}>
            <button className='pasta-btn'>Pasta</button>
      </Link>
      <Link to={'/potato'}>
            <button className='potatoes-btn'>Potatoes</button>
      </Link>
      <Link to={'/bread'}>
            <button className='bread-btn'>Bread</button>
      </Link>
      <Link to={'/favorites'}>
            <button className='favorites-btn'>Favorites</button>
      </Link>
    </div>
  )
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