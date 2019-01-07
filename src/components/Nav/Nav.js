import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../../containers/Search/Search';
import './Nav.css';

const Nav = () => {
  return(
    <div className="nav-bar">
      <div className="link">
        <NavLink to={'/allRecipes'} activeStyle={{ color: '#D5AD47' }} className="nav-link">All Recipes</NavLink>
        <NavLink to={'/pasta'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Pasta</NavLink>
        <NavLink to={'/potato'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Potatoes
        </NavLink>
        <NavLink to={'/bread'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Bread
        </NavLink>
        <NavLink to={'/favorites'} activeStyle={{ color: '#D5AD47' }} className="nav-link">Favorites
        </NavLink>
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  )
}
  
export default Nav;
