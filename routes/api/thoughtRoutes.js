
const router = require('express').Router();
const { getThoughts, getThoughtById, addThought, deleteThought } = require('../../controllers/thoughtController');

// api/users routes
router.route('/')
  .get(getThoughts)
  .post(addThought)

// api/users/:userId routes
router.route('/:thoughtId')
  .get(getThoughtById)
  .delete(deleteThought)

module.exports = router;