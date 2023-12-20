const {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

const router = require('express').Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books', deleteBook);

module.exports = router;
