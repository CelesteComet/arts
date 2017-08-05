import { 
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
	LOG_OUT
} from '../actions/userActions';
	
const defaultState = {
	isFetching: false,
	user: null,
	errors: null
}

const users = (state = defaultState, action) => {
	switch (action.type) {
		case SIGNUP_USER:
			return Object.assign({}, state, {
				isFetching: true,
				errors: false
			})
		case SIGNUP_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				user: action.payload,
				errors: false
			})
		case SIGNUP_USER_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				errors: true // FIX THIS IN FUTURE VERSIONS, RETURN ERRORS?
			})
		case LOG_OUT:
			return Object.assign({}, state, {
				user: null
			})
		default: 
			return state
	}
}

export default users;

