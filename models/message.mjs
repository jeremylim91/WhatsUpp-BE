// this function first creates the db schema and thereafter returns the respective model

export default function initMessageModel(mongoose, dataTypes) {
  // create the schema
  const messsageSchema = new mongoose.Schema({
    message: {
      type: dataTypes.String,
      required: true,
    },
    username: {
      type: dataTypes.String,
      required: true,
    },
    timestamp: {
      type: dataTypes.Date,
      default: Date.now,
    },
    room_id: {
      type: dataTypes.String,
      required: true,
    },
  });
  // create the model based off the schema
  return mongoose.model('Messsage', messsageSchema);
}

// import Person from './person';
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const Chat = new Schema({
//   participants: {
//     type: [Person],
//   },
//   message: String,
//   timeStamp: String,
// });

// module.exports = mongoose.model('Chat', Chat);
