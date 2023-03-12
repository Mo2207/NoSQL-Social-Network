
const { Thought } = require('../models');

module.exports = {
  // export all functions for the routes to use

  // POST a reaction to a thought function
  addReactionById(req, res) {
    // store the req.body.reactionBody in an object so it can be used by findOneAndUpdate() function
    let newReaction = {
      reactionBody: req.body.reactionBody
    }

    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$push: {
        reactions: newReaction
      }},
      {new: true} // returns the modified thought with the new reaction instead of original
      )
      .then((updatedThought) => {
        return res.status(200).json(updatedThought);
      })
      .catch((err) => {
        console.log(err)
        return res.status(404).json({message: 'Invalid thoughtId!'});
      })
  },

  deleteReaction(req, res) {
    let targetReaction = {
      reactionId: req.body.reactionId
    }
    
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: {
        reactions: targetReaction
      }},
      {new: true} // returns the modified thought with the new reaction instead of original
      )
      .then((updatedThought) => {
        return res.status(200).json(updatedThought);
      })
      .catch((err) => {
        console.log(err)
        return res.status(404).json({message: 'Invalid thoughtId!'});
      })
  }

}