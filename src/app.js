const express = require('express');
const dotenv = require('dotenv');
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to Mongo!'))
  .catch((error) => console.log('[MONGO_CONNECTION]', error));

const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.get('/', (request, response) => {
  response.status(200);
  response.send('');
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${API_URL}:${PORT}`);
});
