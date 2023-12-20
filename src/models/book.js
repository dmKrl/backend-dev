const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    minlength: 2,
  },
  authorName: {
    type: String,
    required: true,
    minlength: 2,
  },
});

module.exports = mongoose.model('book', bookSchema);
