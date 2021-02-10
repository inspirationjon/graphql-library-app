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

/* type Mutation {
    addLibrary(libraryName: String!): MutationResponse!
    addUser(username: String! age: Int!) MutationResponse!
    addBook(bookName: String! libraryId: Int! bookName: String!): MutationResponse!
  }

  type MutationResponse {
      status: Int!
      message: String!
  }

 */
