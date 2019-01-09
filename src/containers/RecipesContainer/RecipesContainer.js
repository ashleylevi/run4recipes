import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecipesContainer.css';
import { uid } from 'react-uid';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { fetchPastaThunk } from '../../thunks/loadPastaRecipes';
import { fetchPotatoThunk } from '../../thunks/loadPotatoRecipes';
import { fetchBreadThunk } from '../../thunks/loadBreadRecipes';
import { withRouter } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';
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

  searchRecipes = (value) => {
    const { pastaRecipes, potatoRecipes, breadRecipes } = this.props;
    const allRecipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
    const matches = allRecipes.filter((recipe) => {
      if (recipe.name.toLowerCase().includes(value)) {
        return recipe
      }
    })
    return matches
  }

  render() {
    const { pastaRecipes, potatoRecipes, breadRecipes, match, isLoading, searchValue, isError } = this.props;
    let recipes;
    let recipesToDisplay;
    let str = match.path.substring(1);
    if (isError) {
      recipesToDisplay = <p className="sorry">Sorry, something went wrong</p>
      return recipesToDisplay
    }
    if (isLoading) {
      return <Loading />
    } else {
        if (searchValue) {
          const matches = this.searchRecipes(searchValue)
          recipes = this.props[`${str}Recipes`];
          recipesToDisplay = matches.map((recipe) => {
            return (<RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} path={`/${str}/${recipe.name}`} />)
            })
        } else if (match.path !== '/' && match.path !== '/favorites') {
          recipes = this.props[`${str}Recipes`];
          recipesToDisplay = recipes.map((recipe) => {
            return (<RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} path={`/${str}/${recipe.name}`}/>)
          })
        } else if (match.path === '/favorites') {
          recipes = this.props[`${str}Recipes`];
          const favorites = JSON.parse(localStorage.getItem('faves'))
            if (favorites === null) {
              recipesToDisplay = <p className="no-favorites">You have no favorites!</p>
            }
            else if (!favorites.length) {
              recipesToDisplay = <p className="no-favorites">You have no favorites!</p>
            } else {
              recipesToDisplay = favorites.map((recipe) => {
                return (<RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} path={`/${recipe.category}/${recipe.name}`}/>)
              }) 
            }
        } else {
          recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
          recipesToDisplay = recipes.map((recipe) => {
            return (<RecipeCard recipe={recipe} key={uid(recipe)} updateFavorites={this.updateFavorites} path={`/${recipe.category}/${recipe.name}`}/>)
          })
        }
    
        return (
          <div className="recipes-container">
            { recipesToDisplay }
          </div>
        )
      }
    }
      }


export const mapStateToProps = (state) => ({
  pastaRecipes: state.pastaRecipes,
  potatoRecipes: state.potatoRecipes,
  breadRecipes: state.breadRecipes,
  isLoading: state.isLoading,
  searchValue: state.searchValue,
  isError: state.isError
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
  isLoading: PropTypes.bool,
  searchValue: PropTypes.string,
  isError: PropTypes.bool,
  fetchPastaThunk: PropTypes.func,
  fetchPotatoThunk: PropTypes.func,
  fetchBreadThunk: PropTypes.func
};