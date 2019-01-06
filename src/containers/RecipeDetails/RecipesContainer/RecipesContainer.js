import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecipesContainer.css';
import { uid } from 'react-uid';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { fetchPastaThunk } from '../../thunks/loadPastaRecipes';
import { fetchPotatoThunk } from '../../thunks/loadPotatoRecipes';
import { fetchBreadThunk } from '../../thunks/loadBreadRecipes';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class RecipesContainer extends Component {
  constructor() {
    super()
    this.state = {
      updateFavorites: false
    }
  }

  async componentDidMount() {
    this.props.fetchPastaThunk()
    this.props.fetchPotatoThunk()
    this.props.fetchBreadThunk()
  }

  updateFavorites = () => {
    this.setState({
      updateFavorites: true
    })
  }

  render() {
    const { pastaRecipes, potatoRecipes, breadRecipes, match } = this.props;
    let recipes;
    let recipesToDisplay;
    let str = match.path.substring(1);
    if (match.path !== '/' && match.path !== '/favorites') {
      recipes = this.props[`${str}Recipes`];
      recipesToDisplay = recipes.map((recipe) => {
        return (<Link to={`/${str}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} /></Link>)
      })
    } else if (match.path === '/favorites') {
      const favorites = JSON.parse(localStorage.getItem('faves'))
        if (!favorites.length) {
          recipesToDisplay = <p className="no-favorites">You have no favorites</p>
        } else {
          recipesToDisplay = favorites.map((recipe) => {
            return <RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites}/>
          }) 
        }
    } else {
      recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
      recipesToDisplay = recipes.map((recipe) => {
        return (<Link to={`/${recipe.category}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} /></Link>)
      })
    }

    return (
      <div className="recipes-container">
        { recipesToDisplay }
        {
          favorites.length === 0 && <h2 className="no-favorites">You Have No Favorites</h2>
        }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipesContainer))

RecipesContainer.propTypes = {
  pastaRecipes: PropTypes.array,
  potatoRecipes: PropTypes.array,
  breadRecipes: PropTypes.array,
  fetchPastaThunk: PropTypes.func,
  fetchPotatoThunk: PropTypes.func,
  fetchBreadThunk: PropTypes.func
};