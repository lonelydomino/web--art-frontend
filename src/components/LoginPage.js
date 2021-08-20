import React from 'react'
// import FlashMessage from 'react-flash-message'
// import {signupUser} from '../actions/auth.js'
// import {loginUser} from '../actions/auth.js'
import {connect} from 'react-redux'
import { loginUser, signupUser } from '../actions/auth'
import Button from '@material-ui/core/Button';
import CustomizedSnackbars from './FlashMessage';

// import { useHistory } from 'react-router-dom'
class LoginPage extends React.Component{

	state = {
		email: '',
		password: '',
		name: '',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSignupSubmit = (e) => {
		e.preventDefault()
		let credentials = this.state
		this.props.signupUser(credentials)
		this.props.history.push("/")
	}
	handleLoginSubmit = (e) => {
		e.preventDefault()
		let credentials = this.state
		let history = this.props.history
		this.props.loginUser(credentials, history)
		this.props.history.push("/")
	}
    componentDidMount = () => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
  render(){ 
	  
     return (
         <>
	{/* { this.props.showMessage ? <div className="flash-message"><CustomizedSnackbars message=/></div> : null} */}
        
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={this.handleSignupSubmit}>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" name="name" onChange={this.handleChange} placeholder="Name" />
			<input type="email" name="email" onChange={this.handleChange} placeholder="Email" />
			<input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={this.handleLoginSubmit}>
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input name="email" type="email" placeholder="Email" onChange={this.handleChange}/>
			<input name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
			<a href="/">Forgot your password?</a>
			<button type="submit">Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Register here!</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</>

     )
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
		signupUser: (credentials) => dispatch(signupUser(credentials)),
		loginUser: (credentials) => dispatch(loginUser(credentials))
	}
}

const mapStateToProps = (state) => {
	return {
		showMessage: state.auth.showMessage,
		message: state.auth.message
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)