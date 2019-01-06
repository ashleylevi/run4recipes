import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecipesContainer.css';
import { uid } from 'react-uid';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { fetchPastaThunk } from '../../thunks/loadPastaRecipes';
import { fetchPotatoThunk } from '../../thunks/loadPotatoRecipes';
import { fetchBreadThunk } from '../../thunks/loadBreadRecipes';
import { Link, withRouter } from 'react-router-dom';

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
    let recipesToDisplay;
    let str = match.path.substring(1);
    if (match.path !== '/' && match.path !== '/favorites') {
      recipes = this.props[`${str}Recipes`];
      recipesToDisplay = recipes.map((recipe) => {
        // let isFavorite = false;
        // const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
        // favoritesFromStorage.map((faveRecipe) => {
        //   if (recipe.name === faveRecipe.name) {
        //     isFavorite = true
        //   }
        // })
        return (<Link to={`/${str}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)} /></Link>)
      })
    } else if (match.path === '/favorites') {
      const favorites = JSON.parse(localStorage.getItem('faves'))
      recipesToDisplay = favorites.map((recipe) => {
        // let isFavorite = false;
        // const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
        // favoritesFromStorage.map((faveRecipe) => {
        //   if (recipe.name === faveRecipe.name) {
        //     isFavorite = true
        //   }
        // })
        return <RecipeCard recipe={recipe} key={uid(recipe)}/>
      }) 
    } else {
      recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
      recipesToDisplay = recipes.map((recipe) => {
        // let isFavorite = false;
        // const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
        // favoritesFromStorage.map((faveRecipe) => {
        //   if (recipe.name === faveRecipe.name) {
        //     isFavorite = true
        //   }
        // })
        return (<Link to={`/${recipe.category}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)} /></Link>)
      })
    }

    

    // const { pastaRecipes, potatoRecipes, breadRecipes, match } = this.props;
    // let recipes;
    // let str = match.path.substring(1);
    // let recipesToDisplay;
    // if (match.path !== '/') {
    //   recipes = this.props[`${str}Recipes`];
    //   recipesToDisplay = recipes.map((recipe) => {
    //     return (<Link to={`/${str}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)}/></Link>)
    //   })
    // } else if (match.path === '/') {
    //   recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
    //   recipesToDisplay = recipes.map((recipe) => {
    //     return (<Link to={`/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)}/></Link>)
    //   })
    // } else if (match.path === '/favorites') {
    //   const favorites = JSON.parse(localStorage.getItem('faves'))
    //   recipes = favorites.map((card) => {
    //     return <RecipeCard recipe={recipe} key={uid(recipe)}/>
    //   })

    // } else  {
    //   recipes = [...pastaRecipes, ...breadRecipes, ...potatoRecipes];
    //   recipesToDisplay = recipes.map((recipe) => {
    //     return (<Link to={`/${str}/${recipe.name}`}><RecipeCard recipe={recipe} key={uid(recipe)}/></Link>)
    //   })
    // }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipesContainer))