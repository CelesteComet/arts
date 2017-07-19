import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVenue } from '../actions/venueActions';

class VenueEdit extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var data = new FormData(e.target);
		var ID = this.props.match.params.id;
		const { dispatch } = this.props;
		dispatch(updateVenue(data, ID));
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input type='text' name='venue[name]' placeholder='name' />
					<input type='text' name='venue[location]' placeholder='location' />
					<input type='text' name='venue[start_datetime]' placeholder='state_datetime' />
					<input type='text' name='venue[end_datetime]' placeholder='end_datetime' />
					<input type='submit' value='Update' />
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

VenueEdit = connect(mapStateToProps, mapDispatchToProps)(VenueEdit);

export default VenueEdit;