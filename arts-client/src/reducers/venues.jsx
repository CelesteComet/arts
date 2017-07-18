import { 
	REQUEST_VENUES, RECEIEVE_VENUES, REQUEST_VENUE, RECEIEVE_VENUE,
	CREATE_VENUE, CREATE_VENUE_SUCCESS
} from '../actions/venueActions';

const defaultState = {
	isFetching: false,
	didInvalidate: false,
	lastUpdated: null,
	venues: [],
	activeVenue: null
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
				venues: action.payload,
				lastUpdated: action.receivedAt
			})
		case REQUEST_VENUE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIEVE_VENUE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				activeVenue: action.payload,
				lastUpdated: action.receivedAt
			})
		case CREATE_VENUE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				lastUpdated: action.receivedAt
			})
		case CREATE_VENUE_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				newVenue: action.payload,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

export default venues;
