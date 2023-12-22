const {
  getBook,
  getBooks,
  createBook,
  deleteBook,
} = require('../controllers/books');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/:book_id', getBook);
router.post('/books', createBook);
router.delete('/books/:book_id', deleteBook);

module.exports = router;
