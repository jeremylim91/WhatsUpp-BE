import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const dataTypes = mongoose.Schema.Types;

// Define the schema for this model
const schema = new Schema({
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
