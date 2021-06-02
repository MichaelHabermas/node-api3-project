const express = require('express');

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const Users = require('./users-model');
const Posts = require('../posts/posts-model');
// const {} = require('../middleware/middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
	// RETURN AN ARRAY WITH ALL THE USERS
	Users.get()
		.then(stuff => {
			console.log('IM HERE');
			console.log(stuff);
			res.status(200).json(stuff);
		})
		.catch(err => {
			console.log('IM HERE AND WRONG');
			next(err);
		});
});

router.get('/:id', (req, res) => {
	// RETURN THE USER OBJECT
	// this needs a middleware to verify user id
});

router.post('/', (req, res) => {
	// RETURN THE NEWLY CREATED USER OBJECT
	// this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
	// RETURN THE FRESHLY UPDATED USER OBJECT
	// this needs a middleware to verify user id
	// and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
	// RETURN THE FRESHLY DELETED USER OBJECT
	// this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
	// RETURN THE ARRAY OF USER POSTS
	// this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
	// RETURN THE NEWLY CREATED USER POST
	// this needs a middleware to verify user id
	// and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
