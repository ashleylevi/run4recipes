import React from 'react';
import './RecipeCard.css';

export const RecipeCard = ({recipe, isFavorite}) => {

  const handleClick = () => {
    // const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
    // if(!isFavorite) {
    //   if (favoritesFromStorage) {
    //     const updatedFavorites = [...favoritesFromStorage, recipe]
    //     localStorage.setItem('faves', JSON.stringify(updatedFavorites))
    //   } else {
    //     localStorage.setItem('faves', JSON.stringify([recipe]))
    //   }

    // } else {
    //   const newFavorites = favoritesFromStorage.filter((faveRecipe)=> {
    //     if (faveRecipe.name !== recipe.name ) {
    //       localStorage.setItem('faves', JSON.stringify(newFavorites))       
    //     }   
    //   })
    // }
  }
  
   

  return (
    <div className="recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
      <div className="gradient"></div>
      <div className="favorites-box">
        <p className="recipe-name">{recipe.name}</p>
        <i class="far fa-heart" onClick={() => handleClick()}></i>
      </div>
      
    </div>
  )
}
