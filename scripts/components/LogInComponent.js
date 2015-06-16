var React = require('react');
var validator = require('validator');
     
module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.LogInSubmitted}>
				<input ref="username" type="text" placeholder="Username" />
				<input ref="password" type="text" placeholder="Password" />
				<button type="submit">Log In</button>
				<div ref="usermessage"></div>

			</form>
		);
	},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var username = this.refs.username.getDOMNode().value
		var password = this.refs.password.getDOMNode().value
		if (username.length == 0 ){
			alert('Enter a email adress')
			return
		}
		if (password.length == 0 ){
			alert('Enter a password')
			return
		}
		if (!validator.isEmail(username)){
			alert('Enter a valid email adress')
			return
		}
		if (username !== ('lbledsoe12@hotmail.com') && password !== ('11693Lpb12')){
			alert('Username/Pawssword does not exsist')
			return
		}
		console.log('success')

	}
		
});














