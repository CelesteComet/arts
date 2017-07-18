import React, { Component } from 'react';

// Import actions
import { fetchVenues } from '../actions/venueActions';

class VenueItemsList extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchVenues());
	}

	render() {
		return (
			<ul>
				{this.props.state.venues.venues.map(function(item, index) {
					debugger;
					return (
						<li key={ index }> {item.name} </li>
					);
				})}
			</ul>
		)
	}
}

export default VenueItemsList;