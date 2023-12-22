const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/users');
const loggerOne = require('./middlewares/loggerOne');
const bookRouter = require('./routes/books');

dotenv.config();

const app = express();

const helloWorld = (req, res) => {
  res.status(200);
  res.send('Hello world!');
};

const {
  PORT = 3005,
  API_URL = 'http://localhost',
  MONGO_URL = 'mongodb://localhost:27017/backend',
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to Mongo!'))
  .catch((error) => console.log('[MONGO_CONNECTION]', error));

app.use(cors());
app.use(bodyParser.json());

app.use(loggerOne);

app.get('/', helloWorld);
app.use('/', userRouter);
app.use('/', bookRouter);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${API_URL}:${PORT}`);
});
