import React, { Component } from 'react';
import './RecipeCard.css';

export class RecipeCard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
    const { recipe } = this.props;
    const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
    if (favoritesFromStorage) {
      favoritesFromStorage.forEach((favorite)=> {
        if (favorite.name === recipe.name) {
          this.toggleFavorite()
        }
      })
    }
  }

  toggleFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite
    })
  }

 handleClick = () => {
   const { recipe, updateFavorites } = this.props;
    const { isFavorite } = this.state;
    const favoritesFromStorage = JSON.parse(localStorage.getItem('faves'))
    if (!isFavorite) {
      if (favoritesFromStorage) {
        const updatedFavorites = [...favoritesFromStorage, recipe]
        localStorage.setItem('faves', JSON.stringify(updatedFavorites))
      } else {
        localStorage.setItem('faves', JSON.stringify([recipe]))
      }
    } else {
      const newFavorites = favoritesFromStorage.filter((faveRecipe)=> {
            return faveRecipe.name !== recipe.name 
          })
        localStorage.setItem('faves', JSON.stringify(newFavorites))       
      }
    this.toggleFavorite()
    updateFavorites()

  } 
  
   
  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
        <div className="gradient"></div>
        <div className="favorites-box">
          <p className="recipe-name">{recipe.name}</p>
          <i class="far fa-heart" onClick={this.handleClick}></i>
        </div>
        
      </div>
    )
  }
}
