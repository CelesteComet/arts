import { combineReducers } from 'redux';
import venues from './venues';
import users from './users';

const rootReducer = combineReducers({
	venues,
	users
})

export default rootReducer;