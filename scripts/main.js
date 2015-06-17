var React = require ('react');
var LogInForm = require ('./components/LogInComponent.js');
var Comment = require ('./components/CommentComponent.js');
var CommentCollection = require ('./collections/CommentListCollections.js');
var CommentList = require ('./components/CommentListComponent.js');
var CommentModel = require ('./models/CommentModel.js')
var BlogPost = require ('./components/BlogPostFormComponent.js')
var BlogList = require ('./components/BlogListComponent.js')
var BlogPostCollection = require ('./collections/BlogPostCollection.js')
var comments = new CommentCollection()       
var c = new CommentModel({text:'test',userId:1});
comments.add(c);
c = new CommentModel({text:'test2',userId:1});
comments.add(c);
c = new CommentModel({text:'test3',userId:1});
comments.add(c);
c = new CommentModel({text:'test4',userId:1});
comments.add(c);

React.render(
	<LogInForm />,
	document.getElementById('container')

);
React.render(
	<Comment />,
	document.getElementById('container-2')

);
React.render(
	<CommentList comments ={comments} />,
	document.getElementById('container-3')

);
React.render(
	<BlogPost categories ={['Baseball','Football','Basketball','Soccer']} />,
	document.getElementById('container-4')

);

var blogPosts = new BlogPostCollection([

	{
		title: 'Breaking news! React SUCKS :)',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'react',
		createdAt: new Date('2015-06-16T08:13:00')
	},
	{
		title: 'JOBLO',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'the iron yard',
		createdAt: new Date('2015-06-15T15:24:00')
	},
	{
		title: 'Call of booty',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'dispair',
		createdAt: new Date('2015-06-16T10:04:00')
	},
	{
		title: 'Title 1',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'react',
		createdAt: new Date('2015-06-16T08:13:00')
	},
	{
		title: 'Title 2',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'the iron yard',
		createdAt: new Date('2015-06-15T15:24:00')
	},
	{
		title: 'Title 3',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'dispair',
		createdAt: new Date('2015-06-16T10:04:00')
	}
]);
React.render(
	<BlogList  posts = {blogPosts} number = {5} />,
	document.getElementById('container-5')

);


