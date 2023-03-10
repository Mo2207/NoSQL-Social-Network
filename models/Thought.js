
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
      // use getter to format date into json
    },
    userName: {
      // the user that created thought
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  }
)

// virtual to return length of a thoughts reactions
thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('thought', thoughtSchema);
module.exports = Thought;