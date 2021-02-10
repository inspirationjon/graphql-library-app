const { users, books } = require('./models/data');

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
  },

  User: {
    books: (global) => {
      const filteredBooks = [];

      for (let userBook of global.books) {
        for (let book of books) {
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
      let foundUser;

      for (let user of users) {
        if (user.userId === global.author) {
          foundUser = user;
        }
      }
      return foundUser;
    },
  },
};

module.exports = resolvers;
