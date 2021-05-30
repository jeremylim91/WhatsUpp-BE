import mongoosePkg from 'mongoose';
import initUserModel from './user.mjs';
import initRoomModel from './room.mjs';
import initMessageModel from './message.mjs';

const {Mongoose} = mongoosePkg;
// get a new instance of Mongoose
export const mongoose = new Mongoose();

const db = {};

// db.User = initUserModel(mongoose, mongoose.Schema.Types);
db.User = initUserModel;
db.Room = initRoomModel(mongoose, mongoose.Schema.Types);
db.Message = initMessageModel(mongoose, mongoose.Schema.Types);

export default db;
