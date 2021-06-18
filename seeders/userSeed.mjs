import mongoose from 'mongoose';
import Pic from './utils.mjs';
import {getHashedString} from '../utils/authRelated.mjs';

const data = [
  {
    _id: mongoose.Types.ObjectId(),

    name: 'Jeremy',
    username: 'jeremylim_91',
    password: getHashedString('password1'),
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Joshua',
    username: 'joshualim_91',
    password: getHashedString('password1'),
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Joseph',
    username: 'josephpok_91',
    password: getHashedString('password1'),
  },
];

// insert the avatar for each of them
data.forEach((userProfile) => {
  // getAvatar accepts an argument which is used to generate a random picture. Here, i'm using the username becos it is unqiue and will ensure diferent pictures are generated
  const pic = new Pic(userProfile.username);
  userProfile.imageUrl = pic.getAvatar();
});

// insert the seed data
const insertUserSeed = async (db) => {
  return await db.User.insertMany(data);
};

export default insertUserSeed;
