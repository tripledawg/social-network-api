const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    thoughts: {
      type: String,
      required: false, 
      maxlength: 50,
      minlength: 4,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed assignment',
    },
    email: {
      type: String,
      required: true,
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

module.exports = friendSchema;
