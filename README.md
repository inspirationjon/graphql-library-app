# library-graphql

    type Query {
    	libraries: [Library!]!
    	library(libraryId: Int!): Library!
    	user(userId: Int!): User!
    	users: [User!]!
    	book(bookId: Int!): Book!
    	books: [Book!]!
    }

    type Mutation {
    	addLibrary(libraryName: String!): MutationResponse!
    	addUser(username: String! age: Int!): MutationResponse!
    	addBook(userId: Int! libraryId: Int! bookName: String!): MutationResponse!
    }

    type MutationResponse {
    	status: Int!
    	message: String!
    }

    type Library {
    	libarayId: Int!
    	libraryName: String!
    	books: [Book!]!
    }

    type Book {
    	bookId: Int!
    	bookName: String!
    	author: User!
    }

    type User {
    	userId: Int!
    	username: String!
    	age: Int!
    	books: [Book!]!
    }
