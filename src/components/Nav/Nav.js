import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return(
    <div className="nav-bar">
      <NavLink to={'/allRecipes'} activeStyle={{ color: '#D5AD47' }} className="nav-link">All Recipes</NavLink>
      <NavLink to={'/pasta'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Pasta</NavLink>
      <NavLink to={'/potato'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Potatoes
      </NavLink>
      <NavLink to={'/bread'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Bread
      </NavLink>
      <NavLink to={'/favorites'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Favorites
      </NavLink>
    </div>
  )
}
  
export default Nav;
