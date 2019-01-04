import React from 'react';
import './RecipeCard.css';

export const RecipeCard = ({recipe}) => {
  console.log(recipe)
  return (
    <div className="recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
    <p>{recipe.name}</p>

    </div>
  )
}