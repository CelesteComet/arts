import axios from 'axios';

export const REQUEST_VENUES = 'REQUEST_VENUES';
export const RECEIEVE_VENUES = 'RECEIVE_VENUES';

export function requestVenues() {
	return {
		type: REQUEST_VENUES
	}
}

export function receiveVenues(json) {
	return {
		type: RECEIEVE_VENUES,
		venues: json.data
	}
}

export function fetchVenues() {
	console.log("Fetching Venues");
	return function(dispatch) {
		dispatch(requestVenues());

		return axios.get('http://localhost:3000/api/venues')
			.then((res) => {
				dispatch(receiveVenues(res))
			})
	}
}

