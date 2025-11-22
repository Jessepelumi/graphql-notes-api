// This file defines the types of data to be used.

export const typeDefs = `#graphql
type Tag {
    id: ID!
    name: String!
}
type Note {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    tags: [Tag!]!
}
type Query {
    tags: [Tag]
    notes: [Note]
}
`;
