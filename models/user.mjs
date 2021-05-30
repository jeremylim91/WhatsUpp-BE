import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

const schema = new Schema({
  name: {
    type: dataTypes.String,
    required: true,
  },
  username: {
    type: dataTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: dataTypes.String,
    required: true,
    select: false,
  },
  imageUrl: {
    type: dataTypes.String,
    required: false,
  },
});

export default mongoose.model('Username', schema);

// // this function first creates the db schema and thereafter returns the respective model
// export default function initUserModel(mongoose, dataTypes) {
//   // create the schema
//   const userSchema = new mongoose.Schema({
//     name: {
//       type: dataTypes.String,
//       required: true,
//     },
//     username: {
//       type: dataTypes.String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: dataTypes.String,
//       required: true,
//       select: false,
//     },
//     imageUrl: {
//       type: dataTypes.String,
//       required: false,
//     },
//   });
//   // return the model
//   return mongoose.model('User', userSchema);
// }

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const Person = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   contacts: {
//     type: Array,
//     default: [],
//   },
// });

// // Chat = new Schema({
// //   participants: {
// //     type: [Person],
// //   },
// //   message: String,
// //   timeStamp: String,
// // });

// module.exports = mongoose.model('Person', Person);
