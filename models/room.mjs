// this function first creates the db schema and thereafter returns the respective model

export default function initRoomModel(mongoose, dataTypes) {
  // create the schema
  const roomSchema = new mongoose.Schema({
    name: {
      type: dataTypes.String,
      required: true,
    },
    image: {
      type: dataTypes.String,
      required: false,
    },
    createdBy: {
      type: dataTypes.String,
      required: true,
    },
  });
  // return the model
  return mongoose.model('Room', roomSchema);
}
