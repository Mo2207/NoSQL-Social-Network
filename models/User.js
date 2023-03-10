
const { Schema, model } = require('mongoose');
const checkEmail = require('../utils/checkEmail');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [checkEmail, "Fill valid email"],
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "Fill valid email"]
    },
    thoughts: [],
    friends: []
  }
)

const User = model('user', userSchema);
module.exports = User;