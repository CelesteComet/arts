import axios from 'axios';

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
			.catch(() => {
				dispatch(createVenueFailure);
			})

	}
}

