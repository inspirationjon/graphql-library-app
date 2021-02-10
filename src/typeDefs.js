const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    user(userId: Int!): User!
    users: [User!]!
    book(bookId: Int!): Book!
    books: [Book!]!
    library(libraryId: Int!): Library!
    libraries: [Library]!
  }

  type Mutation {
    addUser(userName: String!, age: Int!): MutationResponse!
    addBook(userId: Int!, bookName: String!): MutationResponse!
    addLibrary(libraryName: String!): MutationResponse!
  }

  type MutationResponse {
    status: Int!
    message: String!
  }

  type User {
    userId: Int!
    userName: String!
    age: Int!
    books: [Book!]!
  }

  type Book {
    bookId: Int!
    bookName: String!
    author: User!
  }

  type Library {
    libraryId: Int!
    libraryName: String!
    books: [Book!]!
  }
`;

module.exports = typeDefs;
