const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    ip: String
  }
`);

module.exports = schema;
