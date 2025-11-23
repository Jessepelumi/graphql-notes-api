// This file defines the types of data we have in the graph. 

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
    tag(id: ID!): Tag
    note(id: ID!): Note
}
`;
