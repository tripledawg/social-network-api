const { Schema, model } = require('mongoose');
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
      get: formatDate
      // getter method to format the timestamp on query
    },
  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, 
    },
  }
);

function formatDate(createdAt){
  moment(createdAt).format("MMM Do YY"); 
}

// Schema to create a thought model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1, 
      max: 280, 
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //* Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true, 
    },
   
    reactions: [reactionSchema],
   
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: true,
  }
);

// Creating a virtual property `reactionCount`
thoughtsSchema.virtual('reactionCount').get(function () {
  if (this.reactions) return this.reactions.length;
  else return 0;
});

const Thoughts = model('thoughts', thoughtsSchema);
module.exports = Thoughts;

