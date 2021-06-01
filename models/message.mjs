import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

const newObjId = () => {
  return mongoose.Types.ObjectId();
};

// define the schema for this model
const schema = new Schema({
  // use this field only for seed data (to assign which messages below in the room)
  _id: {
    type: dataTypes.ObjectId,
  },
  // seed_id: {
  //   type: dataTypes.Number,
  // },
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
    type: dataTypes.ObjectId,
    required: true,
  },
});

// create the model and export it
export default mongoose.model('Message', schema);
