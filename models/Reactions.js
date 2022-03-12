// const { Schema, model } = require('mongoose');
// const moment = require('moment');
// const thoughtsSchema = require('./Thoughts').schema;

// // Schema to create a reaction
// //This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
// const reactionSchema = new Schema(
//   {
//     reactionBody: {
//       type: String,
//       required: true, 
//       max: 280,
//     },
//     username: {
//       type: String, 
//       required: true, 
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now(),
//       get: formatDate
//       // getter method to format the timestamp on query
//     },
  
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true, 
//     },
//   }
// );

// function formatDate(createdAt){
//   moment(createdAt).format("MMM Do YY"); 
// }
// const Reactions = model('reactions',reactionSchema);


// module.exports = Reactions;
