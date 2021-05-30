import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

// define the schema for this model
const schema = new Schema({
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

// create the model and export it
export default mongoose.model('Message', schema);
