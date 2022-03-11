const { Schema, model } = require('mongoose');

// Schema to create a reaction
//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
const reactionSchema = new Schema(
  {
    reactionId: {
      //use Mongoose's ObjectId data type
      //default value is set to new ObjectID
    },
    reactionBody: {
      type: String,
      required: true, 
      max: 280,
    },
    username: {
      type: String, 
      required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Use a getter method to format the timestamp on query
    },
    reactions: {
      type: String,
    },
    //not sure what to put here: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getter: true, 
    },
    id: true,
  }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
