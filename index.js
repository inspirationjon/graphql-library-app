const { ApolloServer } = require('apollo-server');

const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const PORT = require('./src/config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(PORT, console.log.bind(null, PORT));
