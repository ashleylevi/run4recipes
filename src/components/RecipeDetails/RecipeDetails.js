import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

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
  const recipe = category.find((pasta) => {
    return pasta.name === props.match.params.name
  })
    
  const ingredients = recipe.ingredients.map((ingredient) => {
    return ingredient
  })

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image}/>
      <div>{ingredients}</div>

      {/* <Link to={`/${name}`} className='back-btn'>◀ back</Link> */}
      {/* <img src={image} className='app-img-no-hover'/>
      <p className='creature-bio'>{bio}</p> */}
    </div>
  )
}

const mapStateToProps = state => ({
  pastaRecipes: state.pastaRecipes,
  potatoRecipes: state.potatoRecipes,
  breadRecipes: state.breadRecipes
})

export default withRouter(connect(mapStateToProps)(RecipeDetails))