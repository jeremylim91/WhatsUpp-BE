import db from '../models/index.mjs';
import mongoose from 'mongoose';

import insertUserSeed from './userSeed.mjs';
import insertRoomSeed from './roomSeed.mjs';
import insertMessageSeed from './messageSeed.mjs';

const mongoURI = 'mongodb://localhost:27017/whatsuppDB';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

try {
  // run the functions that will seed the db
  await Promise.all([
    insertUserSeed(db),
    insertRoomSeed(db),
    insertMessageSeed(db),
  ]);
  // disconnect from the mongodb server
  mongoose.disconnect();
} catch (error) {
  // if there was an error, display it in the console and thereafter close the connection to the mongo server
  console.log(error);
  mongoose.disconnect();
}
