import axios from 'axios';

// Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

// Log Out User
export const LOG_OUT = 'LOG_OUT';

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

export function logout() {
	return {
		type: LOG_OUT
	}
}

