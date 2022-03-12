const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    thoughts: {
      type: String,
      required: false, 
      maxlength: 50,
      minlength: 4,
    },
    friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
    friendcount: {
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

module.exports = friendSchema;
