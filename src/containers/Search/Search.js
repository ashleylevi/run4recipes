import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions/';
import './Search.css';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
    this.props.searchRecipes(e.target.value.toLowerCase())
  }

  render() {
    return (
      <div className="search-div">
        <form>
          <input
          type="text"
          placeholder="Search Recipes"
          value={this.state.searchValue}
          onChange={this.handleChange}
          className="search-input">
          </input>
        </form>    
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  searchRecipes: (searchValue) => dispatch(searchRecipes(searchValue))
})

export default connect(null, mapDispatchToProps)(Search)