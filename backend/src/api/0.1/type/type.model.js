// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./user.schema.json');
const tableNames = require('../../../constants/tableNames');

class Type extends Model {
  static get tableName() {
    return tableNames.type;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = Type;
