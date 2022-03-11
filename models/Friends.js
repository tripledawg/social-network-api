const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    thoughts: {
      id: //???
      type: String; 
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
    __v: {
      type: //???,
    },
    friendcount: {
      type://????
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
