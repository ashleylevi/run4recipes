import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RecipeDetails.css';

export const RecipeDetails = (props) => {
  let category;
  if(props.pastaRecipes.length) {
    if (props.match.path.includes('pasta')) {
      category = props.pastaRecipes
    } else if (props.match.path.includes('potato')) {
      category = props.potatoRecipes
    } else if (props.match.path.includes('bread')) {
      category = props.breadRecipes
    } else {
      return 
    }
  } else {
    return (<Redirect to='/'/>)
  }
  const recipe = category.find((obj) => {
    return obj.name === props.match.params.name
  })
    
  const ingredients = recipe.ingredients.map((ingredient) => {
    return <li><p className="ingredient">{ingredient}</p></li>
  })

  return (
    <div className="ingredients-div">
      <h1 className="recipe-title">{recipe.name}</h1>
      <div className="recipe-div">
        <img src={recipe.image} className="img"/>
        <ul className="recipe-ingredients">{ingredients}</ul>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  pastaRecipes: state.pastaRecipes,
  potatoRecipes: state.potatoRecipes,
  breadRecipes: state.breadRecipes
})

export default withRouter(connect(mapStateToProps)(RecipeDetails))

RecipeDetails.propTypes = {
  pastaRecipes: PropTypes.array,
  potatoRecipes: PropTypes.array,
  breadRecipes: PropTypes.array
}