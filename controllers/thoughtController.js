
const { Thought } = require('../models');

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
    Thought.create(req.body)
      .then((thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
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
        Thought.deleteOne({
          _id: {
            $in: thought.thoughts
          }
        })
        return res.json(thought);
      }
    })
    .catch((err) => {
      return res.status(500).json(err);
    })
  }
}