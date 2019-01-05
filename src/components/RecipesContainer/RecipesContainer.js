import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecipesContainer.css';
import { uid } from 'react-uid';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { fetchPastaThunk } from '../../thunks/loadPastaRecipes';
import { fetchPotatoThunk } from '../../thunks/loadPotatoRecipes';
import { fetchBreadThunk } from '../../thunks/loadBreadRecipes';
import { Link } from 'react-router-dom';

class RecipesContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    this.props.fetchPastaThunk()
    this.props.fetchPotatoThunk()
    this.props.fetchBreadThunk()
  }

  render() {
    const { pastaRecipes, potatoRecipes, breadRecipes, match } = this.props;
    let recipes;
    if (match.path !== '/') {
      const str = match.path.substring(1);
      recipes = this.props[`${str}Recipes`];
    } else {
      recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
    }

    const recipesToDisplay = recipes.map((recipe) => {
      return (<Link to={`/${recipes}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)}/></Link>)
    })
    
    return (
      <div className="recipes-container">
        { recipesToDisplay }
      </div>
    )
  }
}


export const mapStateToProps = (state) => ({
  pastaRecipes: state.pastaRecipes,
  potatoRecipes: state.potatoRecipes,
  breadRecipes: state.breadRecipes
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPastaThunk: () => dispatch(fetchPastaThunk()),
  fetchPotatoThunk: () => dispatch(fetchPotatoThunk()),
  fetchBreadThunk: () => dispatch(fetchBreadThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)