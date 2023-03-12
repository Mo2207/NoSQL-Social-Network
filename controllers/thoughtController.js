
const { Thought, User } = require('../models');

module.exports = {
  // export all functions for the routes to use
  
  // GET all thoughts function
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        return res.status(500).json(err);
      })
  },

  // GET one thought by id function
  getThoughtById(req, res) {
    Thought.findOne({
      _id: req.params.thoughtId
    })
      .select('-__v')
      .then((thought) => {
        if (!thought) res.status(404).json({message: 'Invalid thoughtId'});
        else res.json(thought);
      })
      .catch((err) => {
        return res.status(500).json(err);
      })
  },

  // POST a thought function
  addThought(req, res) {
    // first find the user posting the thought
    User.findById(req.body.userId)
      .then((user) => {
        // now grab the thought from the req.body
        Thought.create(req.body)
          .then((thought) => {
            // push and save the new thought to the users thoughts array
            user.thoughts.push(thought);
            user.save()
            return res.json(thought)
          })
      })
      .catch((err) => {
        return res.status(500).json(err);
      })
  },

  // DELETE a thought by id function
  deleteThought(req, res) {
    Thought.findOneAndDelete({
      _id: req.params.thoughtId
    })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({message: 'Invalid thoughtId!'});
        }
        else {
          let deletedThought = req.params.thoughtId;
          User.findOneAndUpdate(
            {userName: thought.userName},
            {$pull: {
              thoughts: deletedThought
            }}
            )
              .then((user) => {
                Thought.deleteOne({
                  _id: {
                    $in: thought.thoughts
                  }
                })
                return res.json(thought);
              })
        }
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json(err);
      })
  },

  // PUT a thought by id function
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {thoughtText: req.body.thoughtText},
      {new: true} // returns the modified thought instead of original
    )
      .then((updatedThought) => {
        return res.status(200).json(updatedThought);
      })
      .catch((err) => {
        return res.status(404).json({message: 'Invalid thoughtId!'})
      })
  }
}