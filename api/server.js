const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());

// global middlewares and the user's router need to be connected here
const userRouter = require('./users/users-router');
server.use('./users/users-router', userRouter);

// const middleware = require('./middleware/middleware');
// server.use('./middleware/middleware', middleware);

const postsRouter = require('./posts/posts-router');
server.use('./posts/posts-router', postsRouter);

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
