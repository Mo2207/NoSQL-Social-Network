
const router = require('express').Router();
const { getUsers, getUserById, addUser, deleteUser } = require('../../controllers/userController');

// api/users routes
router.route('/')
  .get(getUsers)
  .post(addUser)

// api/users/:userId routes
router.route('/:userId')
  .get(getUserById)
  .delete(deleteUser)

module.exports = router;