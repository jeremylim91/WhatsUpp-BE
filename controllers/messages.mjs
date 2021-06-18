export default function initMessagesController(db) {
  const getAllMsgsInRoom = async (req, res) => {
    // const {roomName} = req.params;
    const {roomId} = req.params;

    try {
      // get the room document based on user-specified roomId
      const clickedRoom = await db.Room.findById(roomId);

      // get the associated msgs specified in the document
      const associatedMsgs = clickedRoom.associated_messages;

      // get the referenced msgs from the messagess collection
      const allMsgs = await db.Message.find({_id: associatedMsgs});

      // send the response to the client
      res.send(allMsgs);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMsgsByRoom = async (req, res) => {
    try {
      // get all the rooms
      const allRooms = await db.Room.find();

      // set an object that will hold the roomIds as keys and the chatContent as values
      const chatData = {};

      // for each of these rooms, get the messages
      allRooms.map(async (eachRoom, index) => {
        const roomId = eachRoom._id;

        const allMsgsPerRoom = await db.Message.find({
          _id: eachRoom.associated_messages,
        });
        // when we've added the last room's chat contents to charData, send the info back to the client
        chatData[roomId] = allMsgsPerRoom;
        if (index === allRooms.length - 1) {
          res.send(chatData);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (payload) => {
    // get the username and room name
    // const {username, roomId, messageContent} = req.body;
    const {roomId, msgContent, username} = payload;

    try {
      // create the message
      const savedMessage = await db.Message.create({
        // Since we're using custom ids, we need to create an id manually each time
        _id: db.mongoose.Types.ObjectId(),
        message: msgContent,
        username: username,
        room_id: roomId,
      });

      // find the current room
      const currRoom = await db.Room.findById(roomId);
      // append the newly created msg's objectId to the list of associated msgs in currRoom
      currRoom.associated_messages.push(savedMessage.id);
      // save the changes
      await currRoom.save();
      return {
        message: savedMessage.message,
        room_id: savedMessage.room_id,
        timestamp: savedMessage.timestamp,
        username: savedMessage.username,
      };
    } catch (error) {
      console.log(error);
    }
  };
  return {getAllMsgsInRoom, getAllMsgsByRoom, create};
}
