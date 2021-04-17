// Loads a list of counties(In Romania) from a json file, they are pre-cleaned
// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
const crypto = require('crypto'); // random bytes
const bcrypt = require('bcrypt'); // hashing algo
const fs = require('fs');

const tableNames = require('../../src/constants/tableNames.json');
const { table } = require('../../src/db');

const userSeed = async (knex) => {
  const password = process.env.ADMINPASSWD || crypto.randomBytes(15).toString('hex');

  const user = {
    username: process.env.ADMINUSERNAME || 'Admin',
    password: await bcrypt.hash(password, 12),
    role: 'admin',
  };

  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');
  createdUser.hashedPass = createdUser.password;
  createdUser.password = password;

  fs.writeFileSync('./utilizator.json', JSON.stringify(createdUser, null, 2));
};
const typeSeed = async (knex) => {
  const types = [
    { name: 'Politica' },
    { name: 'Sport' },
    { name: 'Economie' },
    { name: 'Externe' },
    { name: 'Actualitate' },
  ];
  await knex(tableNames.type).insert(types);
};

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  // Deletes it in the other in the file(thank god JSON is consistent this time)
  await Promise.all(Object.keys(tableNames).map((name) => knex(name).del()));

  // USERS SEED
  await userSeed(knex);

  // TYPE SEED
  await typeSeed(knex);
};
