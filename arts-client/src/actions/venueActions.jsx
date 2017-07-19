import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Venue List
export const REQUEST_VENUES = 'REQUEST_VENUES';
export const RECEIEVE_VENUES = 'RECEIEVE_VENUES';

// Request Venue
export const REQUEST_VENUE = 'REQUEST_VENUE';
export const RECEIEVE_VENUE = 'RECEIVE_VENUES';
export const RESET_ACTIVE_VENUE = 'RESET_ACTIVE_VENUE';

// Create new Venue
export const CREATE_VENUE = 'CREATE_VENUE';
export const CREATE_VENUE_SUCCESS = 'CREATE_VENUE_SUCCESS';
export const CREATE_VENUE_FAILURE = 'CREATE_VENUE_FAILURE';

// Delete a Venue
export const DELETE_VENUE = 'DELETE_VENUE';
export const DELETE_VENUE_SUCCESS = 'DELETE_VENUE_SUCCESS';
export const DELETE_VENUE_FAILURE = 'DELETE_VENUE_FAILURE';
export const DELETE_VENUE_RESET	= 'DELETE_VENUE_RESET';


const ROOT_URL = 'http://localhost:3000/api/venues';

export function requestVenues() {
	return {
		type: REQUEST_VENUES
	}
}

export function receiveVenues(json) {
	return {
		type: RECEIEVE_VENUES,
		payload: json.data
	}
}

export function requestVenue() {
	return {
		type: REQUEST_VENUE
	}
}

export function receieveVenue(json) {
	return {
		type: RECEIEVE_VENUE,
		payload: json.data
	}
}

export function createVenueSuccess(json) {
	return {
		type: CREATE_VENUE_SUCCESS,
		payload:json.data
	}
}

export function createVenueFailure() {
	return {
		type: CREATE_VENUE_FAILURE
	}
}

export function deleteVenueSuccess() {
	return {
		type: DELETE_VENUE_SUCCESS
	}
}

export function deleteVenueFailure() {
	return {
		type: DELETE_VENUE_FAILURE
	}
}

export function deleteVenueReset() {
	return {
		type: DELETE_VENUE_RESET
	}
}

// Fetch a list of Venues
export function fetchVenues() {
	return function(dispatch) {
		dispatch(requestVenues());
		return axios.get(ROOT_URL)
			.then((res) => {
				dispatch(receiveVenues(res))
			})
	}
}

// Fetch a single Venue
export function fetchVenue(venueID) {
	return function(dispatch) {
		dispatch(requestVenue());
		return axios.get(ROOT_URL + '/' + venueID)
			.then((res) => {
				dispatch(receieveVenue(res))
			})
	}
}

// Create a single Venue
export function createVenue(data) {
	return function(dispatch) {
		return axios.post(ROOT_URL, data)
			.then((res) => {
				dispatch(createVenueSuccess(res));
				dispatch(fetchVenues());
			})
			.catch((res) => {
				dispatch(createVenueFailure);
			})
	}
}

// Destroy a single Venue
export function deleteVenue(venueID) {
	return function(dispatch) {
		return axios.delete(ROOT_URL + '/' + venueID)
			.then((res) => {
				dispatch(deleteVenueSuccess());	
				dispatch(deleteVenueReset());	
			})
			.catch((res) => {
				dispatch(deleteVenueFailure());
			})
	}
}

// Update a single Venue
export function updateVenue(data, venueID) {
	return function(dispatch) {
		return axios.put(ROOT_URL + '/' + venueID)
			.then((res) => {
				console.log(res);
			})
	}
}

