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
		if(this.props.state.users.user) {
			var user = this.props.state.users.user;
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
					<Link to={'/signup'}>Sign Up</Link>
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