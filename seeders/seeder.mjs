// import db from '../models/index.mjs';
// import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/whatsuppDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

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

// const roomSeed = [
//   new db.Room({
//     name: 'dev hangout',
//     createdBy: 'jeremylim_91',
//   }),
//   new db.Room({
//     name: 'foodies unite',
//     createdBy: 'jeremylim_91',
//   }),
//   new db.Room({
//     name: 'cycling buddies',
//     createdBy: 'josephpok_91',
//   }),
// ];

// const initiateSeed = async () => {
//   try {
//     await userSeed.forEach((user) => {
//       user.save();
//     });
//     await roomSeed.forEach((room) => {
//       room.save();
//     });
//     mongoose.disconnect();
//   } catch (error) {
//     console.log(error);
//   }
// };

// initiateSeed();
