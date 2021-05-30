import mongoose from 'mongoose';
export const config = {
  MONGO_USERNAME: 'jeremylim',
  MONGO_PASSWORD: null,
  MONGO_HOSTNAME: '127.0.0.1',
  MONGO_PORT: '27017',
  MONGO_DB: 'whatsuppDB',
};

export const connectionUri = `mongodb://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.MONGO_HOSTNAME}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=admin`;

// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
// const MONGO_DB = 'whatsuppDB';
// const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

// const mongoose = require('mongoose');
// const connectToDb = () => mongoose.connect(url, {useNewUrlParser: true});
// export default connectToDb;
