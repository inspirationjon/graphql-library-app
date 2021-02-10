const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    user(userId: Int!): User!
    users: [User!]!
    book(bookId: Int!): Book!
    books: [Book!]!
  }

  type Book {
    bookId: Int!
    bookName: String!
    author: User!
  }

  type User {
    userId: Int!
    userName: String!
    age: Int!
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

  type Library {
      libraryId: String!
      libraryName: String!
      books: [Book!]!
  } */
/*   libraries: [Library]!
  library(libraryId: String!): Library! */
