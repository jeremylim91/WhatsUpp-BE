import mongoose from 'mongoose';

const data = [
  {
    _id: mongoose.Types.ObjectId(),

    name: 'Jeremy',
    username: 'jeremylim_91',
    password: 'password1',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Joshua',
    username: 'joshualim_91',
    password: 'password1',
  },
  {
    _id: mongoose.Types.ObjectId(),
    name: 'Joseph',
    username: 'josephpok_91',
    password: 'password1',
  },
];

const insertUserSeed = async (db) => {
  return await db.User.insertMany(data);
};

export default insertUserSeed;
