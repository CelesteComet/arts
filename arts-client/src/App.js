import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React Router
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Components
import VenueItemsListContainer from './components/VenueItemsListContainer';
import VenueDetail from './components/VenueDetail';
import VenueEdit from './components/VenueEdit';

// Redux Store Configuration
import configureStore from './store/configureStore';

let store = configureStore();

// Components


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
        	<div>
	          <Route exact path='/' component={ VenueItemsListContainer } />
	          <Route path='/venues/:id' component={ VenueDetail } />
            <Route path='/venues/:id/edit' component={ VenueEdit } />
	        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
