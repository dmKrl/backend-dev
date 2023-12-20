const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PATCH, DELETE');
};

module.exports = cors;
