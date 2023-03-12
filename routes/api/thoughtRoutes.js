
const router = require('express').Router();
const { addReactionById, deleteReaction } = require('../../controllers/reactionController');
const { getThoughts, getThoughtById, addThought, deleteThought, updateThought } = require('../../controllers/thoughtController');

// api/thoughts routes
router.route('/')
  .get(getThoughts)
  .post(addThought)

// api/thoughts/:thoughtId routes
router.route('/:thoughtId')
  .get(getThoughtById)
  .delete(deleteThought)
  .put(updateThought)

// api/thoughts/:thoughtId/reactions routes
router.route('/:thoughtId/reactions')
  .post(addReactionById)
  .delete(deleteReaction)

module.exports = router;