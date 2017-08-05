import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import VenueItemsList from './VenueItemsList';

// Import Actions
import { fetchVenue, deleteVenue, deleteVenueReset } from '../actions/venueActions';

class VenueDetail extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchVenue(this.props.match.params.id))
	}

	componentDidUpdate() {
		if(this.props.state.venues.deleteSuccess) {
			const { dispatch } = this.props;
			this.props.history.push('/');
		}
	}

	handleClick(venueID) {
		const { dispatch } = this.props;
		dispatch(deleteVenue(venueID));
	}

	render() {
		if(this.props.state.venues.activeVenue) {
			var venue = this.props.state.venues.activeVenue.venue;
			var user = this.props.state.venues.activeVenue.user;
		} else {
			var venue = {};
		}

		return (
			<div>
			{	venue && user &&
				<div className='venu-item'>
					<Link to={'/venues/' + venue.slug}>
						<p>{ venue.name }</p>
					</Link>
					<p>{ venue.location }</p>
					<p>{ user.name }</p>
					<p>{ venue.start_datetime }</p>
					<p>{ venue.end_datetime }</p>
					<button onClick={ this.handleClick.bind(null, venue.id) }>DELETE</button>
					<Link to={'/venues/' + venue.slug + '/edit'}>
						<p>UPDATE</p>
					</Link>
					<hr/>
				</div>
			}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

VenueDetail = connect(mapStateToProps, mapDispatchToProps)(VenueDetail);

export default VenueDetail;
