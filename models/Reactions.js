const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts').schema;

// Schema to create a reaction
//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
const reactionSchema = new Schema(
  {
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
  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, 
    },
    id: true,
  }
);

const Reactions = model('reactions',reactionSchema);

module.exports = Reactions;
