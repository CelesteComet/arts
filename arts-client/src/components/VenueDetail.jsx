import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import VenueItemsList from './VenueItemsList';

// Import Actions
import { fetchVenue, deleteVenue } from '../actions/venueActions';



class VenueDetail extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchVenue(this.props.match.params.id))
	}

	handleClick(venueID) {
		const { dispatch } = this.props;
		dispatch(deleteVenue(venueID));
	}

	render() {
		if(this.props.state.venues.activeVenue) {
			var venue = this.props.state.venues.activeVenue;
		} else {
			var venue = {};
		}
	
		return (
			<div>
			{	venue &&
				<div className='venu-item'>
					<Link to={'/venues/' + venue.id}>
						<p>{ venue.name }</p>
					</Link>
					<p>{ venue.location }</p>
					<p>{ venue.start_datetime }</p>
					<p>{ venue.end_datetime }</p>
					<button onClick={ this.handleClick.bind(null, venue.id) }>DELETE</button>
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
