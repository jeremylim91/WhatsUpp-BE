import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

// define the schema for this model
const schema = new Schema({
  _id: {
    type: dataTypes.ObjectId,
  },
  name: {
    type: dataTypes.String,
    required: true,
  },
  image: {
    type: dataTypes.String,
    required: false,
  },
  createdBy: {
    type: dataTypes.ObjectId,
    required: true,
  },
  associated_messages: {
    type: dataTypes.Array,
    default: [],
  },
});

// create the model and export it
export default mongoose.model('Room', schema);
