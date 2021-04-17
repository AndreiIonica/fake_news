// DB connection to be reused
const knex = require('knex');
const { Model } = require('objection');

const enviroment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');

const envConfig = config[enviroment];
const connection = knex(envConfig);

Model.knex(connection);
module.exports = connection;
