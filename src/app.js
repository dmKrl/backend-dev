const express = require('express');
const dotenv = require('dotenv');
const cors = require('./middlewares/cors');
const routes = require('./routes');
const mongoose = require('mongoose');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./controllers/users');
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('./controllers/books');

dotenv.config();

const {
  PORT = 3007,
  API_URL = 'http://localhost',
  MONGO_URL = 'mongodb://localhost:27017/backend',
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to Mongo!'))
  .catch((error) => console.log('[MONGO_CONNECTION]', error));

const bodyParser = require('body-parser');

const app = express();

app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${API_URL}:${PORT}`);
});
