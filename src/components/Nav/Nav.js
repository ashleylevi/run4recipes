import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return(
    <div className="nav-bar">
      <NavLink to={'/allRecipes'} activeStyle={{ color: 'red' }} className="nav-link">
            <button className='all-btn'>All Recipes</button>
      </NavLink>
      <NavLink to={'/pasta'} activeStyle={{ color: 'red' }}>
            <button className='pasta-btn'>Pasta</button>
      </NavLink>
      <NavLink to={'/potato'} activeStyle={{ color: 'red' }}>
            <button className='potatoes-btn'>Potatoes</button>
      </NavLink>
      <NavLink to={'/bread'} activeStyle={{ color: 'red' }}>
            <button className='bread-btn'>Bread</button>
      </NavLink>
      <NavLink to={'/favorites'} activeStyle={{ color: 'red' }}>
            <button className='favorites-btn'>Favorites</button>
      </NavLink>
    </div>
  )
}
  
export default Nav;
