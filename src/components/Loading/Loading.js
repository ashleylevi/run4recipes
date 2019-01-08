import React from 'react';
import './Loading.css';

export const Loading = () => {

  return (
    <div className="loading-container">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      <p className="loading">Loading</p>
    </div>
  )
}