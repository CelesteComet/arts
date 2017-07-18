import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import VenueItemsListContainer from './components/VenueItemsListContainer';

// Redux Store Configuration
import configureStore from './store/configureStore';

let store = configureStore();

// Components


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div> 
          <VenueItemsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
