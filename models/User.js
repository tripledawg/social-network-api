const { Schema, model } = require('mongoose');
const friendSchema = require('./Friends');
const thoughtsSchema = require('./Thoughts');

// Schema to create Student model
const userSchema = new Schema(
  {
   
    username: {
      type: String,
      unique: true, 
      required: true,
      // max_length: 12,
      //trimmmed??
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      //validation of email address using Mongoose's matching validation
    },
    thoughts: [thoughtsSchema],//array of thought ids
    friends: [friendSchema],//???array of user ids of freinds
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// Creating a virtual property `friendCount`
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
