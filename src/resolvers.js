const { users, books, libraries } = require('./models/data');

const resolvers = {
  Query: {
    //   User
    user: (_, { userId }) => {
      return users.find((user) => user.userId === userId);
    },
    users: () => users,
    // Book
    book: (_, { bookId }) => {
      return books.find((book) => book.bookId === bookId);
    },
    books: () => books,
    // Library
    library: (_, { libraryId }) => {
      return libraries.find((library) => library.libraryId === libraryId);
    },
    libraries: () => libraries,
  },

  Mutation: {
    addUser: (_, { userName, age }) => {
      const newUser = {
        userId: users.length + 1,
        userName,
        age,
        books: [],
      };

      users.push(newUser);

      return {
        status: 200,
        message: 'A new user has been added succesfully!',
      };
    },

    addBook: (_, { userId, bookName }) => {
      const newBook = {
        bookId: books + 1,
        bookName,
        author: userId,
      };

      books.push(newBook);

      return {
        status: 200,
        message: 'A new book has been added succesfully!',
      };
    },

    addLibrary: (_, { libraryName }) => {
      const newLibrary = {
        libraryId: libraries.length + 1,
        libraryName,
        books,
      };

      libraries.push(newLibrary);

      return {
        status: 200,
        message: 'A new library has been added succesfully!',
      };
    },
  },

  User: {
    books: (global) => {
      const filteredBooks = [];

      for (let book of books) {
        for (let userBook of global.books) {
          if (book.bookId === userBook) {
            filteredBooks.push(book);
          }
        }
      }

      return filteredBooks;
    },
  },

  Book: {
    author: (global) => {
      let foundUser = {};

      for (let user of users) {
        if (user.userId === global.author) {
          foundUser = user;
        }
      }

      return foundUser;
    },
  },

  Library: {
    books: (global) => {
      let filteredBooks = [];

      for (let book of books) {
        for (let libBookId of global.books) {
          if (book.bookId === libBookId) {
            filteredBooks.push(book);
          }
        }
      }

      return filteredBooks;
    },
  },
};

module.exports = resolvers;
