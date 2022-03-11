const { Schema, model } = require('mongoose');
const friendSchema = require('./Friends');

// Schema to create Student model
const userSchema = new Schema(
  {
    id: {
      type: //???
      required: true,
      max_length: 50,
    },
    userbame: {
      type: String,
      required: true,
      max_length: 12,
    },
    email: {
      type: String,
      required: true,
      max_length: 25,
    },
    friends: [friendSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
