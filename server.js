const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

dotenv.config({ path: "./config/config.env" });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

connectDB();

server.listen({ port: 5000 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
