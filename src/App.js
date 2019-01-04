import React, { Component } from 'react';
import RecipesContainer from './components/RecipesContainer/RecipesContainer';
import { getRecipes } from './utils/apiCalls'
import './App.css';


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">run4recipes</h1>
          <h2 className="slogan">HIGH CARB MEAL IDEAS <img src='./images/runner.png' alt="runner" className='main-logo'></img> TO FUEL ANY RUN</h2>
        </div>
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
