import React, { Component } from 'react';
import RecipesContainer from '../RecipesContainer/RecipesContainer';
import favoritesContainer from '../RecipesContainer/RecipesContainer';
import Nav from '../Nav/Nav';
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
            path='/potato'
            component={RecipesContainer}
          />
          <Route 
            path='/bread'
            component={RecipesContainer} />
            <Route
              path='/favorites'
              component={favoritesContainer} />
          <Route 
            exact path='/'
            component={RecipesContainer} />
          <Route 
            path='/'
            render={() => {
              return <Redirect to='/' />
          }} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null)(App))
