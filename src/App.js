import React, { Component } from 'react';
import RecipesContainer from './components/RecipesContainer/RecipesContainer';
import { getRecipes } from './utils/apiCalls';
import Nav from '../src/components/Nav/Nav';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
        <Nav />
        <RecipesContainer/>
        <Switch>
          <Route 
            exact
            path='/allRecipes' 
            render={() => {
                return <Redirect to='/' />
            }}
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

export default withRouter(connect(null)(App))
