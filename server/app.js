/* eslint-disable no-console */
const express = require('express');
const graphqlHTTP = require('express-graphql');
const dotenv = require('dotenv');

const connect = require('./db');
const logger = require('./middleWare/logger');
const schema = require('./db/schema/User');

dotenv.config();

const app = express();
const { PORT, DB_URL } = process.env;
const root = {
  ip: (args, request) => request.ip,
};


connect(DB_URL).catch((error) => console.log(error));

app.use(logger);
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to a GrapQL',
  });
});

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql'`);
});
