import db from '../models/index.mjs';
import mongoose from 'mongoose';

const userSeed = [
  {
    name: 'Jeremy',
    username: 'jeremylim_91',
    password: 'password1',
  },
  {
    name: 'Joshua',
    username: 'joshualim_91',
    password: 'password1',
  },
  {
    name: 'Joseph',
    username: 'josephpok_91',
    password: 'password1',
  },
];
// const userSeed = [
//   new db.User({
//     name: 'Jeremy',
//     username: 'jeremylim_91',
//     password: 'password1',
//   }),
//   new db.User({
//     name: 'Joshua',
//     username: 'joshualim_91',
//     password: 'password1',
//   }),
//   new db.User({
//     name: 'Joseph',
//     username: 'josephpok_91',
//     password: 'password1',
//   }),
// ];

const done = 3;

const mongoURI = 'mongodb://localhost:27017/whatsuppDB';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

try {
  db.User.insertMany(userSeed).then((data) => {
    console.log('data inserted is');
    console.log(data);
    mongoose.disconnect();
    console.log('disconnected');
  });
} catch (error) {
  console.log(error);
}

// try {
//   userSeed.forEach((user) => {
//     user.save();
//     // if (idx === done) {
//     //   mongoose.disconnect();
//     // }
//   });

//   // mongoose.connection.close();
// } catch (error) {
//   console.log(error);
// }
// mongoose.disconnect();

// const mongoURI = 'mongodb://localhost:27017/whatsuppDB';
// mongoose
//   .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => {
//     try {
//       userSeed.forEach((user, idx) => {
//         user.save();
//         // if (idx === done) {
//         //   mongoose.disconnect();
//         // }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .then(() => mongoose.disconnect);
