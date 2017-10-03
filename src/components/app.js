import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import SearchDisplay from '../containers/search_display'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchDisplay />
      </div>
    );
  }
}
