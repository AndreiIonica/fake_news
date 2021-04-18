// Loads a list of counties(In Romania) from a json file, they are pre-cleaned
// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
const crypto = require('crypto'); // random bytes
const bcrypt = require('bcrypt'); // hashing algo
const { getLinkPreview } = require('link-preview-js');
const fs = require('fs');

const tableNames = require('../../src/constants/tableNames.json');
const data = require('../sources/news.json');

const userSeed = async (knex) => {
  await knex(tableNames.user).del();
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
  await knex(tableNames.type).del();

  const types = [
    { name: 'Politica' },
    { name: 'Sport' },
    { name: 'Economie' },
    { name: 'Externe' },
    { name: 'Actualitate' },
  ];
  await knex(tableNames.type).insert(types);
};

const fakeSeed = async (knex) => {
  await knex(tableNames.news).del();

  const insertData = [];

  for (let d of data) {
    const preview = await getLinkPreview(d.link);

    d.title = preview.title;
    d.description = preview.title;
    if (d.image === undefined) d.image = preview.images[0];
    insertData.push(d);
  }
  await knex(tableNames.news).insert(insertData);
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

  // FAKE SEED
  await fakeSeed(knex);
};
