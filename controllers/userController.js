
const { User } = require('../models');

module.exports = {
  // export all functions for the routes to use
  
  // GET all users function
  getUsers(req, res) {
    User.find()
      .then((users) => {
        return res.json(users);
      })
      .catch((err) => {
        return res.status(500).json(err);
      })
  },

  // GET one user by id function
  getUserById(req, res) {
    User.findOne({
      _id: req.params.userId
    })
    .select('-__v')
    .then((user) => {
      if (!user) res.status(404).json({message: 'Invalid userId'});
      else res.json(user);
    })
    .catch((err) => {
      return res.status(500).json(err);
    })
  },

  // POST a user function
  addUser(req, res) {
    User.create(req.body)
      .then((user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      })
  },

  // DELETE a user by id function
  deleteUser(req, res) {
    User.findOneAndDelete({
      _id: req.params.userId
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({message: 'Invalid userId!'});
      }
      else {
        User.deleteOne({
          _id: {
            $in: user.users
          }
        })
        return res.json(user);
      }
    })
    .catch((err) => {
      return res.status
    })
  }
}