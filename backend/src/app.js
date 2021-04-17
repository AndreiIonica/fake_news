// The express app.
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
// Security headers
const helmet = require('helmet');

// Connect to db
const db = require('./db');

// notFound and a generic errorHandler
const middlewares = require('./middlewares');

// api router
const api = require('./api/0.1/router');

// invoke the express app
const app = express();

// middlewares for logging(morgan), compression, security(helmet) and json body-parser
app.use(morgan('tiny'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());

// generic response for the '/' route
app.get('/', (req, res) => {
  res.json({
    message: 'ROU Backend!',
  });
});

// mount the api router
app.use('/api/v1/', api);

// these need to be the last middlewares(a router is a middleware)
// as something should hit these middlewares if it is a error or notFound
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// export the app so we can set the port in index.js
// Also for testing purposes(supertest can emulate web requests without using a port)
module.exports = app;
