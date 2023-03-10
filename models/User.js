
const { Schema, model, default: mongoose } = require('mongoose');
const checkEmail = require('../utils/checkEmail');


const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [checkEmail, "Fill valid email"],
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "Fill valid email"]
    },
    thoughts: [mongoose.SchemaTypes.ObjectId],
    friends: [mongoose.SchemaTypes.ObjectId]
  }
)

// virtual to return a users friend count
userSchema.virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })

const User = model('user', userSchema);
module.exports = User;