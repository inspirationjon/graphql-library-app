const { users, books, libraries } = require('./models/data');

const resolvers = {
  Query: {
    user: (_, { userId }) => {
      return users.find((user) => user.userId === userId);
    },
    users: () => users,

    book: (_, { bookId }) => {
      return books.find((book) => book.bookId === bookId);
    },
    books: () => books,

    library: (_, { libraryId }) => {
      return libraries.find((library) => library.libraryId === libraryId);
    },
    libraries: () => libraries,
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
