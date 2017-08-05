import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVenue } from '../actions/venueActions';

class VenueEdit extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			name: ""
		}
	}

	componentDidMount() {
		this.setState({
			name: this.props.state.venues.activeVenue.name
		})
	}


	handleSubmit(e) {
		e.preventDefault();
		var data = new FormData(e.target);
		var ID = this.props.match.params.id;
		const { dispatch } = this.props;
		dispatch(updateVenue(data, ID));
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			name: e.target.value
		})
	}

	render() {
		var venue = this.props.state.venues.activeVenue;
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input type='text' name='venue[name]' value={this.state.name} onChange={ this.handleChange }/>
					<input type='text' name='venue[location]' value={venue.location} />
					<input type='text' name='venue[start_datetime]' value={venue.start_datetime} />
					<input type='text' name='venue[end_datetime]' value={venue.end_datetime} />
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