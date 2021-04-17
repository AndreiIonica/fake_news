// The model Objection.js uses for validation
const { Model } = require('objection');

const schema = require('./news.schema.json');
const tableNames = require('../../../constants/tableNames.json');

class News extends Model {
  static get tableName() {
    return tableNames.news;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = News;
