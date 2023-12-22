const Book = require('../models/book');

// Получим всех пользователей из БД
const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then((book) => {
      if (!book) res.status(404).send('book not found');
      else res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем пользователя
const createBook = (req, res) => {
  Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then((user) => {
      if (!user) res.status(404).send('cannot delete');
      else res.status(200).send('success');
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
};
