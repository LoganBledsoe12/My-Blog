var React = require('react');
var validator = require('validator');
var BlogPost = require ('../models/BlogPostModel.js');

     
module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.AddPostSubmitted}>
				<input ref="title" type="text" placeholder="Username" />
				<input ref="body" type="text" placeholder="Password" />
				<select ref="category">
				{this.props.categories.map(function(c){
					return <option>{c}</option>
				})}</select>
				<button type="submit">ADD</button>

			</form>
		);
	},
	AddPostSubmitted: function(e) {
		e.preventDefault();
		var title = this.refs.title.getDOMNode().value
		var body = this.refs.body.getDOMNode().value
		var category = this.refs.category.getDOMNode().value
		if (title.length == 0 ){
			alert('Enter a post title')
			return
		}
		if (body.length == 0 ){
			alert('Enter a post body')
			return
		}
		if (category.length == 0 ){
			alert('Enter a post category')
			return
		}
		//word after the : is the variable 
		var BP = new BlogPost({'title':title,'body':body,'category':category})

	}
		
});