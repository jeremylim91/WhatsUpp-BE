import mongoosePkg from 'mongoose';
import userModel from './user.mjs';
import roomModel from './room.mjs';
import messageModel from './message.mjs';

const {Mongoose} = mongoosePkg;
// get a new instance of Mongoose
export const mongoose = new Mongoose();

// set an object that will hold all the models
const db = {};

db.User = userModel;
db.Room = roomModel;
db.Message = messageModel;

db.mongoose = mongoose;

export default db;
