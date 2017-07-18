import { REQUEST_VENUES, RECEIEVE_VENUES } from '../actions/venueActions';

const defaultState = {
	isFetching: false,
	didInvalidate: false,
	lastUpdated: null,
	venues: []
}

const venues = (state = defaultState, action) => {
	switch (action.type) {
		case REQUEST_VENUES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIEVE_VENUES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				venues: action.venues,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

export default venues;
