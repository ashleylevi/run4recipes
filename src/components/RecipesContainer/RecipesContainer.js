import React, { Component } from 'react';
import { fetchPastaRecipes, fetchPotatoRecipes, fetchBreadRecipes } from '../../utils/apiCalls';
import { loadAllRecipes, loadPastaRecipes, loadPotatoRecipes, loadBreadRecipes } from '../../actions/index';
import { connect } from 'react-redux';
import './RecipesContainer.css';
import { uid } from 'react-uid';
import { RecipeCard } from '../RecipeCard/RecipeCard';

class RecipesContainer extends Component {
  constructor() {
    super()
  }



  async componentDidMount() {
    const { allRecipes } = this.props;
    // if recipesarray exist in local storage exists, don't make fetch just grab from local storage, else make fetch and save to local
      const pastaRecipes = await fetchPastaRecipes()
      this.storeArrayData('pasta', pastaRecipes)
      const potatoRecipes = await fetchPotatoRecipes()
      this.storeArrayData('potato', potatoRecipes)
      const breadRecipes = await fetchBreadRecipes()
      this.storeArrayData('bread', breadRecipes)
      this.props.loadAllRecipes(pastaRecipes, potatoRecipes, breadRecipes)    
  };

  storeArrayData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
  };

  render() {
    const { allRecipes, pastaRecipes, potatoRecipes, breadRecipes, match } = this.props;
    let recipesArray;
    if (!match) {
      recipesArray = allRecipes
    } else if (match.path === '/pasta') {
      console.log('pasta')
      recipesArray = pastaRecipes
    } else if (match.path === '/potatoes') {
      recipesArray = potatoRecipes
    } else if (match.path === '/bread') {
      recipesArray = breadRecipes
    }

    const recipesToDisplay = recipesArray.map((recipe) => {
      return (<RecipeCard recipe={recipe} key={uid(recipe)}/>)
    })
    
    return (
      <div className="recipes-container">
        { recipesToDisplay }
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
  loadAllRecipes: (recipes1, recipes2, recipes3) => dispatch(loadAllRecipes(recipes1, recipes2, recipes3))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)