import React, { Component } from 'react';
import { login } from '../actions/userActions';
import { connect } from 'react-redux';

class LoginPage extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {

		if(this.props.state.users.isAuthenticated) {

			const { dispatch } = this.props;
			this.props.history.push('/');
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		var formData = new FormData(e.target);
		dispatch( login(formData) );
	}

	render() {
		return (
			<div>
				{this.props.state.users.errors && 
					<p>Your stuff has issues</p>		
				}
				<form onSubmit={ this.handleSubmit }>
					<label htmlFor='name'>Name</label>
					<input type='text' name='user[name]' />				
					<label htmlFor='email'>Email</label>
					<input type='text' name='user[email]' />			
					<label htmlFor='password'>Password</label>
					<input type='password' name='user[password]' />	
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);


export default LoginPage;