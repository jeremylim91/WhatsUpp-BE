import {getIdxOfLastElInArr} from './utils.mjs';

export default function initRoomsController(db) {
  const index = async (req, res) => {
    // query the db to get all the rooms and the most recent msg posted in that room
    try {
      const allRooms = await db.Room.find();
      // set an object that will hold the info to return to client
      const dataToReturnToClient = [];

      // loop thru allRooms using a (for...of) loop becos it allows async/await (forEach loops don't)
      for (const room of allRooms) {
        // if there are no associated messages, assign an empty arr to the room
        if (room.associated_messages.length < 1) {
          dataToReturnToClient.push({
            id: room.id,
            associated_messages: room.associated_messages,
            name: room.name,
            createdBy: room.createdBy,
            image: room.image,
            lastMsg: '',
          });
          continue;
        }
        // else, add the last msg to the allRooms data
        const lastMsgObjId =
          room.associated_messages[
            getIdxOfLastElInArr(room.associated_messages)
          ];
        // query the messages collection for this message
        const lastMsg = await db.Message.findById(lastMsgObjId);
        const msgContent = lastMsg.message;
        // append the room and last msg to data

        dataToReturnToClient.push({
          id: room.id,
          associated_messages: room.associated_messages,
          name: room.name,
          createdBy: room.createdBy,
          image: room.image,
          lastMsg: msgContent,
        });
      }
      // Send data back to client
      res.send(dataToReturnToClient);
    } catch (error) {
      console.log(error);
      // pass errors to express to use its default error handler
      next(error);
    }
  };
  return {
    index,
  };
}
