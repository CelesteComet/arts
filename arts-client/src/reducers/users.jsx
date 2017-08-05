import { 
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE,
	RECEIVE_LOGOUT, LOGIN_SUCCESS
} from '../actions/userActions';
	
const defaultState = {
	isFetching: false,
	user: null,
	errors: null,
	isAuthenticated: localStorage.getItem('id_token') ? true : false
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
				errors: false,
				isAuthenticated: true
			})
		case SIGNUP_USER_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				errors: true // FIX THIS IN FUTURE VERSIONS, RETURN ERRORS?
			})
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				errors: false,
				isAuthenticated: true
			})
		case RECEIVE_LOGOUT:
			return Object.assign({}, state, {
				isAuthenticated: false
			})
		default: 
			return state
	}
}

export default users;

