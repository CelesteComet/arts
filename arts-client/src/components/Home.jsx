import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VenueItemsListContainer from './VenueItemsListContainer';

// Action Creators
import { logout } from '../actions/userActions';

class Home extends Component {
	constructor() {
		super();
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		const { dispatch } = this.props;
		dispatch( logout() );
	}

	render() {
		if(this.props.state.users.isAuthenticated) {
			var user = true;
		}
		return (
			<div>

				{ user && 
					<div>
						<p>Welcome {user.name}</p>
						<button onClick={ this.handleLogOut }>Log Out</button>
					</div>
				}	

				{
					!user &&
					<div>
						<Link to={'/signup'}>Sign Up</Link>
						<Link to={'/login'}>Log In</Link>
					</div>
				}

				<div>
					<VenueItemsListContainer />	
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {state}
}

Home = connect(mapStateToProps)(Home);

export default Home;