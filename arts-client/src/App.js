import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React Router
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Components
import Home from './components/Home';
import SignupPage from './components/SignupPage';
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
            <Route exact path='/' component={ Home } />
            <Route exact path='/signup' component={ SignupPage } />
	          <Route path='/venues/:id' component={ VenueDetail } />
            <Route path='/venues/:id/edit' component={ VenueEdit } />
	        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
