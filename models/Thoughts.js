const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    reactions: {
      type: String,
    },
    __v: {
      type: //???
    }
    reactionCount: {
      type: //???
    }
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
