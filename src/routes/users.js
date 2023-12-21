const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');
const loggerTwo = require('../middlewares/loggerTwo');

const router = require('express').Router();

router.use(loggerTwo);

router.get('/users', getUsers);
router.get('/users/:user_id', getUser);
router.post('/users', createUser);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);

module.exports = router;
