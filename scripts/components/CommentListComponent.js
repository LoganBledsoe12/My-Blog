var React = require('react');
var CommentModel = require('../models/CommentModel');

module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.comments.map(function(comment){
					return <li>{comment.get('text')}</li>
				})}
			</ul>
		);
	},
}); 