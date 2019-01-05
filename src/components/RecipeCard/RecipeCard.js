import React from 'react';
import './RecipeCard.css';

export const RecipeCard = ({recipe}) => {
  const ingredients = recipe.ingredients.map((ingredient) => {
    return ingredient
  })
  return (
    <div className="recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
      <ul>{ingredients}</ul>
      <div className="gradient"></div>
      <div className="favorites-box">
        <p className="recipe-name">{recipe.name}</p>
        <i class="far fa-heart"></i>
      </div>
      
    </div>
  )
}