import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/userActions';



class SignupPage extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		if(this.props.state.users.user) {
			const { dispatch } = this.props;
			this.props.history.push('/');
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		var formData = new FormData(e.target);
		dispatch( signUpUser(formData) );
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

SignupPage = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default SignupPage;