import axios from 'axios';

// Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

// Sign In User
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Log Out User
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

const ROOT_URL = 'http://localhost:3000/users';

export function signUpUser(formData) {
	return function(dispatch) {
		dispatch({type: SIGNUP_USER})
		return axios.post(ROOT_URL, formData)
			.then((res) => {
				var user = res.data;
				dispatch(signUpUserSuccess(user));
			})
			.catch((res) => {
				var errors = res.data;
				dispatch(signUpUserFailure(errors));
			})
	}
}

export function signUpUserSuccess(user) {
	return {
		type: SIGNUP_USER_SUCCESS,
		payload: user 
	}
}

export function signUpUserFailure(errors) {
	return {
		type: SIGNUP_USER_FAILURE,
		payload: errors 
	}
}

export function requestLogin(credentials) {
	return {
		type: LOGIN_REQUEST,
		payload: credentials 
	}
}

export function receiveLogin(user) {
	return {
		type: LOGIN_SUCCESS,
		payload: user 
	}
}

export function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		payload: message
	}
}

export function requestLogout() {
	return {
		type: REQUEST_LOGOUT
	}
}

export function receiveLogout() {
	return {
		type: RECEIVE_LOGOUT
	}
}

export function login(creds) {
	return function(dispatch) {

		dispatch(requestLogin(creds));

		return axios.post('http://localhost:3000/sessions/create', creds)
			.then((res) => {
				var user = res.data;
				// If login was successful, set the token in local storage
        localStorage.setItem('id_token', user.id_token);
				dispatch(receiveLogin(user));
			})
			.catch((res) => {

			})
	}
}

// Logs the user out
export function logout() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}



