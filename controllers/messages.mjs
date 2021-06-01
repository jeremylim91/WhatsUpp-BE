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

  const create = async (req, res) => {
    // get the username and room name
    const {username, roomId, messageContent} = req.body;

    try {
      // create the message
      const savedMessage = await db.Message.create({
        _id: db.mongoose.Types.ObjectId(),
        message: messageContent,
        username: username,
        room_id: roomName,
      });

      // find the current room
      const currRoom = await db.findById(roomId);
      // append the newly created msg's objectId to the list of associated msgs in currRoom
      currRoom.associated_messages.push(savedMessage.id);
      // save the changes
      await currRoom.save();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  return {getAllMsgsInRoom, create};
}
