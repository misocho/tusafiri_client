/* eslint-disable no-console */
const { PubSub, GraphQLServer } = require('graphql-yoga');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const connect = require('./db');
const typeDefs = require('./db/Models/User/typeDefs');
const resolvers = require('./db/Models/User/resolvers');

dotenv.config();

const { PORT, DB_URL } = process.env;

connect(DB_URL).catch((error) => console.log('An error occured while connecting to the database', error));

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

const options = {
  port: PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  playGround: true,
};

mongoose.connection.once('open', () => server.start(options, ({ port }) => console.log(`We are connected at localhost:${port}`)));
