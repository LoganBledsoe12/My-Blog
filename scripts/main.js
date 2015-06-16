var React = require ('react');
var LogInForm = require ('./components/LogInComponent.js');
var Comment = require ('./components/CommentComponent.js');
var Comment = require ('./components/CommentListComponent.js');

React.render(
	<LogInForm />,
	document.getElementById('container')

);
React.render(
	<Comment />,
	document.getElementById('container-2')

);
React.render(
	<CommentList />,
	document.getElementById('container-3')

);

