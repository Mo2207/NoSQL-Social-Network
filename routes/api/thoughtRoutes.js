
const router = require('express').Router();
const { getThoughts, getThoughtById, addThought, deleteThought, updateThought } = require('../../controllers/thoughtController');

// api/users routes
router.route('/')
  .get(getThoughts)
  .post(addThought)

// api/users/:userId routes
router.route('/:thoughtId')
  .get(getThoughtById)
  .delete(deleteThought)
  .put(updateThought)

module.exports = router;