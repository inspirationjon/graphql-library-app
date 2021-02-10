const { v4: uuid } = require('uuid');

const users = [
  {
    userId: 1,
    userName: 'Ilhom',
    age: 18,
    books: [1],
  },
  {
    userId: 2,
    userName: 'Farruh',
    age: 20,
    books: [2],
  },
  { userId: 3, userName: 'Harrari', age: 50, books: [] },
  {
    userId: 4,
    userName: `Masaru Ibuka`,
    age: 40,
    books: [],
  },
];

const books = [
  {
    bookId: 1,
    bookName: 'Sapiens',
    author: 3,
  },
  {
    bookId: 2,
    bookName: `After three it's too late`,
    author: 4,
  },
];

module.exports = { users, books };
