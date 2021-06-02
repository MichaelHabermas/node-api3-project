const express = require('express');

const router = express.Router();

router.use(express.json());

const Posts = require('./posts-model');
console.log('Post MODEL -> ', Posts);

router.use('*', (req, res) => {
	res.status(400).json({
		message: 'not found'
	});
});

module.exports = router;
