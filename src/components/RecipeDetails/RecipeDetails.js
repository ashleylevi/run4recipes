import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeDetails = ({ name }) => {
  return (
    <div>
      <Link to={`/${name}`} className='back-btn'>◀ back</Link>
      <h1>{name}</h1>
      {/* <img src={image} className='app-img-no-hover'/>
      <p className='creature-bio'>{bio}</p> */}
    </div>
  )
}