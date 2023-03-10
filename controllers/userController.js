
const { User } = require('../models/User');

module.exports = {
  // export all functions for the routes to use
  
  // GET all users
  getUsers(req, res) {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(500).json(err);
      })
  },

  // GET one user by id
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
      res.status(500).json(err);
    })
  }

}