import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

// Define the schema for this model
let schema = new Schema({
  _id: {
    type: dataTypes.ObjectId,
  },
  name: {
    type: dataTypes.String,
    required: true,
  },
  username: {
    type: dataTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: dataTypes.String,
    required: true,
    select: false,
  },
  imageUrl: {
    type: dataTypes.String,
    required: false,
  },
});

// create the model and export it
export default mongoose.model('User', schema);
