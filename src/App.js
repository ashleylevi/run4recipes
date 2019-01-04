import React, { Component } from 'react';
import RecipesContainer from './components/RecipesContainer/RecipesContainer';
import { getRecipes } from './utils/apiCalls';
import Nav from '../src/components/Nav/Nav';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="App">


        <RecipesContainer />
        <Nav />
        <Switch>
          <Route 
            exact
            path='/allRecipes' 
            component={RecipesContainer}
          />
          <Route
            path='/pasta'
            component={RecipesContainer}
          />
          <Route
            path='/potatoes'
            component={RecipesContainer}
          />
  
          <Route 
            path='/bread'
            component={RecipesContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
