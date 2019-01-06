import React from 'react';
import './RecipeCard.css';

export const RecipeCard = ({recipe}) => {
  const handleClick = () => {
    const favorites = JSON.parse(localStorage.getItem('faves'))
    if (favorites) {
      let updatedFavorites = [...favorites, recipe]
      localStorage.setItem('faves', JSON.stringify(updatedFavorites))
    } else {
      localStorage.setItem('faves', JSON.stringify([recipe]))
    }
  }

  return (
    <div className="recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
      <div className="gradient"></div>
      <div className="favorites-box">
        <p className="recipe-name">{recipe.name}</p>
        <i class="far fa-heart" onClick={handleClick}></i>
      </div>
      
    </div>
  )
}