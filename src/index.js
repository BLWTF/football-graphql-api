const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('../src/resolvers')

const server = new GraphQLServer ({
    typeDefs: './src/schema.graphql',
    resolvers,
});

server.start(() => console.log(`Server is running http://localhost:4000`));