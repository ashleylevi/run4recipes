import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return(
    <div className="nav-bar">
      <Link to={'/allRecipes'}>
            <button className='all-btn'>All Recipes</button>
      </Link>
      <Link to={'/pasta'}>
            <button className='pasta-btn'>Pasta</button>
      </Link>
      <Link to={'/potato'}>
            <button className='potatoes-btn'>Potatoes</button>
      </Link>
      <Link to={'/bread'}>
            <button className='bread-btn'>Bread</button>
      </Link>
      <Link to={'/favorites'}>
            <button className='favorites-btn'>Favorites</button>
      </Link>
    </div>
  )
}
  
export default Nav;
