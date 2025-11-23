import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { db } from "./_db.ts";

import { typeDefs } from "./schema.ts";

// resolvers
const resolvers = {
  Query: {
    notes() {
      return db.notes;
    },
    note(_, args) {
      return db.notes.find((review) => review.id === args.id);
    },
    tags() {
      return db.tags;
    },
    tag(_, args) {
      return db.tags.find((tag) => tag.id === args.id);
    },
  },
};

// server setup
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server started at ${url}`);
