import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import actions
import { fetchVenues, createVenue } from '../actions/venueActions';

class VenueItemsList extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchVenues());
	}

	handleSubmit(e) {
		e.preventDefault();
		var formData = new FormData(e.target);
		this.props.dispatch(createVenue(formData));
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.state.venues.venues.map(function(item, index) {
						return (
							<li key={ item.id }>
								<Link to={'/venues/' + item.slug }><p>{ item.name }</p></Link>
							</li>
						);
					})}
				</ul>
				{/*
				<form onSubmit={ this.props.dispatch(createVenue({
					name: "Bruce",
					location: "THE NEW LOCATION",
					start_datetime: "2016-01-32",
					end_datetime: "2016-21-22"
				})) }>
				*/}
				<form onSubmit={ this.handleSubmit }>
					<input type='text' name='venue[name]' placeholder='name' />
					<input type='text' name='venue[location]' placeholder='location' />
					<input type='text' name='venue[start_datetime]' placeholder='state_datetime' />
					<input type='text' name='venue[end_datetime]' placeholder='end_datetime' />
					<input type='submit' value='Create' />
				</form>
			</div>
		)
	}
}

export default VenueItemsList;