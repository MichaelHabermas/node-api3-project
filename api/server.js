const express = require('express');
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());

// global middlewares and the user's router need to be connected here
const userRouter = require('./users/users-router');
server.use('./api/users', userRouter);

server.use((req, res, next) => {
	console.log(`[${req.method}] ${req.path}`);
	next();
});

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('*', (req, res) => {
	res.status(404).send(`
       <p>Oops, can't find that!</p>
  `);
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
	console.log('err handling middleware kicking in!', err.message);
	res.status(err.status || 500).json({
		custom: 'something exploded inside the app',
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;
