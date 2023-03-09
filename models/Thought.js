
const { model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      //todays current date
      // use getter to format date into json
    },
    username: {
      // the user that created thought
      type: String,
      required: true
    },
    reactions: []
  }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;